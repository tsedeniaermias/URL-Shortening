"use client"
import React from "react";
import Image from "next/image";
const Stats = () => {
    //* create a state that shows Shorten any valid URL in typescript
    const [url, setUrl] = React.useState("");

    const [shortenedUrl, setShortenedUrl] = React.useState<
      { original: string; short: string }[]
    >([]);
    const [error, setError] = React.useState<string | null>(null);
    const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null); // Track which link was copied
  
   //* Function to shorten the URL
   const shortenUrl = async () => {
    if (!url.trim()) {
      setError("Please enter a valid URL");
      // console.log(error)
      return;
    }
    try {
      const response = await fetch(`https://is.gd/create.php?format=json&url=${encodeURIComponent(url)}`);
      const data = await response.json();
    
      if (data.shorturl) {
        setShortenedUrl([...shortenedUrl, { original: url, short: data.shorturl }]);
        setUrl("");
        setError(null);
      } else {
        setError("Failed to shorten the URL. Please check if the URL is valid.");
      }
    } catch (error) {
      setError("Error shortening URL");
    }
  };
  
  //* Handle URL input change
    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUrl(event.target.value);
    };
  
    //* Handle form submission
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      shortenUrl();
    };
  
   //* Handle copying shortened URL to clipboard and updating button text
   const copyToClipboard = (shortUrl: string, index: number) => {
    navigator.clipboard.writeText(shortUrl);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 10000); // Reset after 2 seconds
  };
  return (
    <section className="stats-wrapper">
        <form onSubmit={handleSubmit} className="shorten-url-form">
        <input type="text" 
        placeholder="Shorten a link here..."
        value={url}
        onChange={handleUrlChange} />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="btn btn-primary">Shorten it!</button>
        
      </form>
     

      <div className='shortened-urls'>
        <ul>

        {shortenedUrl.map((link, index) => (
          <div key={index} className='shortened-url'>
            <p>{link.original}</p>
            <a href={link.short} target="_blank" rel="noopener noreferrer">{link.short}</a>
            <button
              onClick={() => copyToClipboard(link.short, index)}
              className='btn btn-secondary'
            >
              {copiedIndex === index ? "Copied!" : "Copy"}
            </button>
          </div>
        ))}
        </ul>
      </div>
    <div className="stats">
       
      <div className="content">
        <h1 className="title">Advanced Statistics</h1>
        <p className="desc">
          Track how your links performing across the web with <br />our advanced
          statistics dashboard.{" "}
        </p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">
              <Image
                src="/icon-brand-recognition.svg"
                alt="Brand Logo"
                width={40}
                height={40}
              />
            </div>

            <h3 className="card-title">Brand Recognition</h3>
            <p className="card-body">
              {" "}
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <Image
                src="/icon-detailed-records.svg"
                alt="Brand Logo"
                width={40}
                height={40}
              />
            </div>

            <h3 className="card-title">Detailed Records</h3>
            <p className="card-body">
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
          <div className="card">
            <div className="card-icon">
              <Image
                src="/icon-fully-customizable.svg"
                alt="Brand Logo"
                width={40}
                height={40}
              />
            </div>

            <h3 className="card-title">Fully Customizable</h3>
            <p className="card-body">
              Improve brand awareness and content discoverability through
              customizable links, supercharging auduence engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Stats;
