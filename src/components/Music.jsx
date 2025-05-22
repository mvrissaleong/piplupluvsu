export default function Music() {
  return (
    <div className="music">
      <h2>🎧 Our Playlist</h2>
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/1prb2lWFLKumqrd6kQqpnY?utm_source=generator"
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
      <p>I hope this works..</p>
    </div>
  )
}
