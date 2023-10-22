export default function Home() {
    return (
        <>
            <center>Translated
                <audio controls>
                    <source src="./hello_world.mp3" type="audio/ogg" />
                    <source src="./hello_world.mp3" type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </center>
        </>
    )
}
