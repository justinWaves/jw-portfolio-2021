## Hello! 🌊🌊🌊🌊🌊🌊

This is my 2021 Portfolio Website I designed and built with React. Implemented in Typescript.

### Random Traffic 🚴🏾🚗

This was a fun one. In the Traffic.tsx as well as the AirTraffic.tsx component, random vehicles are selected from thier respected arrays, and then animate across the screen via CSS at a randomized speed. The interval in which the vehicles are generated are also randomized. This logic is placed in a UseEffect hook, and the traffic items are stored in a state array called "traffic" (airTraffic for the planes), creating a never ending loop. Using Reacts "OnAnimationEnd()" method, the traffic item at index [0] is removed from the state array using a filter method.
Since the traffic speed is randomized and the index [0] item may still be present on the screen when the removeTrafficItem function is called, a 15 second timer was put in place, to avoid items from disappearing from the screen. On unmount, the timers are cleared so your browser may be at peace.
bridge traffic will not exceed 35 items and air traffic will not exceed 5, and I have left in console.logs in place so you can see the code work in real time All design assets are optimized SVGs to maximize performance, and everything is fully responsive for all screen sizes.

### Theme Switching 💅

I handled the light/ dark mode using Styled-Themes / Styled-Components. I only use Styled-components for styles effected by theme switch and included them in the body of each component. The rest of the styling is handled by good-ol CSS files.
The theme switching Logic is tucked away in its own file/ folder called "Theme Manager" which utilizes React's Context API. I was initially going to use Redux for this but I found this method to be much cleaner for this purpose.

### React-Spring 🏄‍♂

I used a really cool js animation library called react-spring to handle certain events. I cant wait to play with this more. You can see this on the git-hub icon button onClick. cool stuff.

### Email.JS 🖥

To handle my email server as of now I used Email.js. Very easy to use and implement. Logic for my validation function and all event handling is found in the footer.tsx component (Controlled Component).

## Thank You for Reading 🎊

I put in a great deal of love into this project and learned some new tech along the way and I am very pleased with the result. I love feedback on my code or anything else. Thanks for Reading!

🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊🌊
