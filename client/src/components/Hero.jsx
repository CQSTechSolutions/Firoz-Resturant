const Hero = () => {
  return (
  <section id="hero" className="hero bg-light mt-20">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-4">
        <div className="flex flex-col justify-center order-2 lg:order-1 lg:w-1/2">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-5">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.3511171623477!2d72.82888077502444!3d18.960094682220728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf39cc0d85ed%3A0xae82910815dd52c8!2sAKBER&#39;S%20FIROZ%20FARAN!5e0!3m2!1sen!2sin!4v1737967218820!5m2!1sen!2sin" 
                width="100%" 
                height="500" 
                style={{border: 0}} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
              ></iframe>
            </div>
          </div>
        </div>
        <div className="order-1 lg:order-2 lg:w-1/2 md:ml-10" data-aos="zoom-out">
          <img src="/hero-img.png" className="w-120 h-120 animate-[bounce_8s_ease-in-out_infinite]" alt="" />
        </div>
      </div>
    </div>
  </section>
  );
}

export default Hero;