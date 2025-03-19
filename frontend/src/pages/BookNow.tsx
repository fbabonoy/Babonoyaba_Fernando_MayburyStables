import Iframe from 'react-iframe';

function BookNow() {
    return (
        <div className="w-full h-150 overflow-auto">
            <Iframe
                url="https://maybury-stables.checkfront.com/reserve/?inline=1&amp;options=tabs&amp;provider=droplet&amp;ssl=1&amp;src=https%3A%2F%2Fwww-mayburystables-com.filesusr.com&amp;1742400462482"
                className="w-full"
                styles={{ height: '100vh', width: '100%', border: 'none',  }}
                overflow= 'auto'
                scrolling="auto"
                allowFullScreen
            />
        </div>
    );
}

export default BookNow;
