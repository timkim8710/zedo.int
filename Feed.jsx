import VideoPlayer from './VideoPlayer';

export default function Feed({ posts }) {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
      {posts.map(post => (
        <div key={post.id} className="snap-start h-screen">
          <VideoPlayer url={post.videoUrl} />
        </div>
      ))}
    </div>
  );
}
