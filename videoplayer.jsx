export default function VideoPlayer({ url }) {
  return (
    <video className="w-full h-full object-cover" loop autoPlay muted>
      <source src={url} type="video/mp4" />
    </video>
  );
}
