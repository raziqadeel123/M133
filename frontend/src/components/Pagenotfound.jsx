import React from 'react'
import pagenotfoundimg from './Assets/pagenotfound.svg';
export const Pagenotfound = () => {
  return (
    <section>
      <img src={pagenotfoundimg} alt='pagenotfound' />
      <div>
        <h2>Page not found</h2>
        <a href='/'>Back</a>
      </div>
    </section>
  );
}
