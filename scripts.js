    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.overlay');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    });

    overlay.addEventListener('click', () => {
        hamburger.classList.remove('active');
        menu.classList.remove('active');
        overlay.classList.remove('active');
    });

      


  // let text = [
  //   // 'Simplify your event planning process with ease.',
  //   // 'Discover, organize, and execute unforgettable events, all in one place.'
  // ];

  // let textIndex = 0;

  // function autoText() {
  //   const textBox = document.getElementById("autoTextBox");
  //   const sentence = text[textIndex];
  //   const words = sentence.split(' ');
  //   textBox.innerHTML = '';

  //   words.forEach((word, index) => {
  //     setTimeout(() => {
  //       textBox.innerHTML += word + ' ';
  //     }, 200 * index);
  //   });

  //   setTimeout(() => {
  //     textIndex = (textIndex + 1) % text.length;
  //     autoText();
  //   }, words.length * 200 + 3000);
  // }

  // // Run it after page loads
  // window.addEventListener('DOMContentLoaded', autoText)


    // let text = [
    //     // 'Simplify your event planning process with ease.',
    //     // 'Discover, organize, and execute unforgettable events, all in one place.',
    //   ];
    //   let textIndex = 0;
      
    //   function autoText() {
    //     let i = text[textIndex];
    //     let auto = i.split(' ');
      
    //     console.log(auto);
      
    //     for (let e = 0; e < auto.length; e++) {
    //       const element = auto[e];
    //       setTimeout(() => {
    //         console.log(element);
    //       }, 100 * (e + 1));
    //     }
      
    //     setTimeout(() => {
    //       textIndex = (textIndex + 1) % text.length; // Cycle through the text array
    //       autoText(); // Call the function again to display the next text
    //     }, i.length + 5000); // Delay after the whole string is printed.
    //   }

      
      
    // //   