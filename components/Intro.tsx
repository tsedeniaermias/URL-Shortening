"use client"
import React from "react";
import Image from "next/image";

const Intro = () => {

  return (
    <section className="intro">
      <div className="content ">
        <div className="title-desc">
          <h1 className="title">More than just shorter links</h1>
          <p className="desc">
            Build your brand&apos; recognition and get detailed insights on how your
            links are performing
          </p>
          <button type="submit" className="btn btn-primary">
            Get Started
          </button>
        </div>

        <div className="img-wrapper">
          <Image
            src="/illustration-working.svg"
            alt="Brand Logo"
            width={1000}
            height={1000}
          />
        </div>
      </div>
      {/* <form onSubmit={handleSubmit} className="shorten-url-form">
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
      </div> */}
    </section>
  );
};

export default Intro;
