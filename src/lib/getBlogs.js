import glob from 'fast-glob';
import * as path from 'path';

async function importBlog(blogFilename) {
  const { meta } = await import(`../app/blogs/${blogFilename}`);
  return {
    slug: blogFilename.replace(/(\/index)?\.mdx$/, ''),
    ...meta,
  };
}

export async function getBlogs() {
  const blogFilenames = await glob(['*.mdx', '*/index.mdx'], {
    cwd: path.join(process.cwd(), 'src/app/blogs'),
  });

  const blogs = await Promise.all(blogFilenames.map(importBlog));
  return blogs;
}
