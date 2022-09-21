import Layout from '../components/Layout'
import Post from '../components/Post'
import { getALLPostsData } from '../lib/posts'

export default ({ posts }) => {
  return (
    <Layout title="blog-page">
      <ul className="m-10">
        {posts && posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const posts = await getALLPostsData()
  return {
    props: { posts },
  }
}