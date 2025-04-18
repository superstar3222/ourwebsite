export default function VideoSection() {
    return (
        <div className="w-full h-full">
            <video
                src="/video/home.mp4"
                className="w-full h-full object-cover"
                controls={false}
                autoPlay
                muted
                loop
                playsInline
            />
        </div>
    )
}