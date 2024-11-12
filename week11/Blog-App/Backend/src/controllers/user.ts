// imports and necessary interfaces
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from '@prisma/extension-accelerate';
import { signinSchema, SignupSchema } from '../zod/user';
// import { Jwt } from 'hono/utils/jwt';
import { Context } from 'hono';
import jwt from 'jsonwebtoken';

enum StatusCode {
  BADREQ = 400,
  NOTFOUND = 404,
  NOTPERMISSION = 403,
}

interface JWTPayload {
  sub: string;
  exp?: number;
}

// Function to create JWT payload
const createJwtPayload = (userId: number): JWTPayload => {
  return {
    sub: userId.toString(),
    exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24-hour expiry
  };
};

// Signup function
export async function signup(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body: { username: string; email: string; password: string } = await c.req.json();

    const parsedUser = SignupSchema.safeParse(body);
    if (!parsedUser.success) {
      return c.body('Invalid user input', StatusCode.BADREQ);
    }

    const isUserExist = await prisma.user.findFirst({
      where: { email: body.email },
    });

    if (isUserExist) {
      return c.body('Email already exists', StatusCode.BADREQ);
    }

    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
    });

    const payload:JWTPayload = createJwtPayload(newUser.id);
    const token = await jwt.sign(payload, c.env.JWT_TOKEN);

    return c.json({
      msg: 'User created successfully',
      token,
      user: {
        userId: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
    return c.body(`Internal server error: ${error}`, 500);
  }
}

// Signin function
export async function signin(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const body: { email: string; password: string } = await c.req.json();

    const parsedUser = signinSchema.safeParse(body);
    if (!parsedUser.success) {
      return c.body('Invalid user input', StatusCode.BADREQ);
    }

    const isUserExist = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password,
      },
    });

    if (isUserExist == null) {
      return c.body('User does not exist', StatusCode.NOTFOUND);
    }

    const payload:JWTPayload = createJwtPayload(isUserExist.id);
    
    const token = await jwt.sign(payload, c.env.JWT_TOKEN);

    return c.json({
      message: 'Login successful',
      token,
      user: {
        userId: isUserExist.id,
        username: isUserExist.username,
        email: isUserExist.email,
      },
    });
  } catch (error) {
    console.error(error);
    return c.body(`Internal server error: ${error}`, 500);
  }
}

// Get user profile function
export async function userProfile(c: Context) {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const userId = Number(c.req.param('id'));

    const res = await prisma.user.findFirst({
      where: { id: userId },
      include: { posts: true },
    });

    if (!res) {
      return c.body('User not found', StatusCode.NOTFOUND);
    }

    return c.json({
      user: {
        id: res.id,
        username: res.username,
        email: res.email,
        posts: res.posts,
      },
    });
  } catch (error) {
    console.error(error);
    return c.body(`Internal server error: ${error}`, 500);
  }
}

// Get all users function
export const getAllUsers = async (c: Context) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const users = await prisma.user.findMany();
    return c.json({
      users: users.map((user: { id: any; username: any; email: any; }) => ({
        id: user.id,
        username: user.username,
        email: user.email,
      })),
    });
  } catch (error) {
    console.error(error);
    return c.body(`Internal server error: ${error}`, 500);
  }
};
