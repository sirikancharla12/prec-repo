import { PrismaClient } from "@prisma/client";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Context } from "hono";

enum StatusCode {
    BADREQ = 400,
    NOTFOUND = 404,
    NOTPERMISSIOON = 403,
  }

  export async function getPosts(c:Context) {
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())
try{
    const response=await prisma.post.findMany({
        include:{
            user:true
        }
    })
    return c.json({
        posts:response.map((res: { id: any; user: { username: any; id: any; }; title: any; body: any; createdAt: any; })=>({
            id:res.id,
            username:res.user.username,
            userId:res.user.id,
            title:res.title,
            body:res.body,
            createdAt:res.createdAt
        }

        ))
    })
}  catch(error){
    return c.body(`Internal server error : ${error}`,500)
}

  }

  export async function getUserPosts(c: Context) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const resp = await prisma.post.findMany({
        where: {
          userId: c.get('userId'),
        },
      });
      return c.json({
        post: resp,
      });
    } catch (error) {
      return c.body(`Internal server error: ${error}`, 500);
    }
  }

  export async function CreatePost(c:Context){
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL
    }).$extends(withAccelerate())

    try{
        const body:{
title:string,
body:string,
        }=await c.req.json();
        if((body.body && body.title )){
return c.body(`Invalid user input`,StatusCode.BADREQ)
        }

        const res=await prisma.post.create({
            data:{
                title:body.title,
                body:body.title,
                userId:c.get('userId'),
                
            }
        })
        return c.json({
            message:'Post Successfully',
            posts:{
                id:res.id,
                title:res.title,
                body:res.body,
                createdAt:res.createdAt
            }
        })
    }
   
    catch(error){
        return c.body(`error creating post ${error}`)
    }
  } 


  export async function GetPost(c:Context){
    const prisma=new PrismaClient({
        datasourceUrl:c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    try{
        const id:number=Number(c.req.param('id'));
        const isPostExist=await prisma.post.findFirst({
            where:{
                id:id,
                userId:c.get('userId')
            },
        })

        if(isPostExist==null){
            return c.body('Post does not exists',StatusCode.NOTFOUND)
        }
        return c.json({
            data:{
                id:isPostExist.id,
                title:isPostExist.title,
                body:isPostExist.body,
                createdAt:isPostExist.createdAt
            }
        })
    }catch(error){
        return c.body(`Internal server error: ${error}`, 500);
    }
  }

  
  export async function updatePost(c: Context) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const id: number = Number(c.req.param('id'));
  
      const body: {
        title: string;
        body: string;
        tags: string;
      } = await c.req.json();
  
      const tagNames = body.tags.split(',').map((tag) => tag.trim());
  
      const isPostExist = await prisma.post.findFirst({
        where: {
          id: id,
          userId: c.get('userId'),
        },
      });
  
      if (isPostExist == null) {
        return c.body('Post does not exists', StatusCode.NOTFOUND);
      }
  
      const res = await prisma.post.update({
        where: {
          id: id,
          userId: c.get('userId'),
        },
        data: {
          title: body.title,
          body: body.body,
         
        },
        
      });
  
      return c.json({
        data: {
          id: res.id,
          title: res.title,
          body: res.body,
          createdAt: res.createdAt,
        },
      });
    } catch (error) {
      return c.body(`Internal server error: ${error}`, 500);
    }
  }
  
  export async function deletePost(c: Context) {
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
    try {
      const id: number = Number(c.req.param('id'));
  
      const isPostExist = await prisma.post.findFirst({
        where: {
          id: id,
          userId: c.get('userId'),
        },
      });
  
      if (isPostExist == null) {
        return c.body('Post does not exists', StatusCode.NOTFOUND);
      }
  
      const res = await prisma.post.delete({
        where: {
          id: id,
          userId: c.get('userId'),
        },
      });
      return c.json({
        message: 'post deleted',
      });
    } catch (error) {
      return c.json({ msg: `Internal server error: ${error}` }, 500);
    }
  }

