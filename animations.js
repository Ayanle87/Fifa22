gsap.registerPlugin(ScrollTrigger);

// Intro load
const load = gsap.timeline();
const liv = gsap.timeline();
const welcomeScreen = gsap.timeline({
  paused: "true",
});
load.from(".title", {
  duration: 0.5,
  opacity: 0,
  y: 10,
});
load.from(".bracket", {
  duration: 0.3,
  scale: 0,
  margin: 0,
});
load.from("#loader", {
  duration: 0.2,
  scale: 0,
});
load.from(".loading-images", {
  duration: 0.8,
  x: -3050,
  opacity: 0,
  stagger: {
    amount: 1,
  },
});

///

let id,
  i = 0;
function loader() {
  id = setInterval(frame, 45);
}
function frame() {
  if (i >= 100) {
    clearInterval(id);
    welcomeScreen.play();
  } else {
    i++;
    document.getElementById("loader").innerHTML = i + "%";
  }
}
window.onload = function () {
  loader();
};

welcomeScreen.to(".loading-section, .loading-images-container", {
  y: -10,
  opacity: 0,
});
welcomeScreen.to(".loading-screen", {
  duration: 0.8,
  opacity: 0,
  ease: "Power4.out",
});

welcomeScreen.to(".loading-screen", {
  duration: 0,
  y: -2000,
  opacity: 0,
  ease: "Power4.out",
});

welcomeScreen.from(
  ".INTRO",
  {
    y: 200,
    duration: 0.5,
    stagger: {
      amount: 5.7,
    },
  },
  "-=.8"
);

/// för intro
let intro = gsap.timeline({
  scrollTrigger: {
    trigger: ".INTRO",
    scrub: 2,
    toggleActions: "play reverse play reverse",
  },
});

intro.to(".INTRO", {
  opacity: 1,
  scale: 1,
  duration: 1.5,
});
intro.to(".INTRO", {
  opacity: 0,
  scale: 1.3,
  duration: 1.5,
});

//för poster

gsap.set("video", {
  stagger: 0.1,
  duration: 3.8,
});
let video = gsap.timeline({
  scrollTrigger: {
    start: "top top",
    end: "center center",
    trigger: "video",
    scrub: 4,
    toggleActions: "play reverse play reverse",
  },
});

video.to("video", {
  opacity: 1,
  scale: 1,
  duration: 0.5,
});
video.to("video", {
  opacity: 0,
  scale: 1.3,
  duration: 0.5,
});

// för intro text
gsap.set(".groups-text", {
  opacity: 0,
  x: -30,
  stagger: 0.1,
  duration: 3.8,
});
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".groups-text",
    start: "+=10 95%",
    end: "+=200 40%",
    scrub: 1,
    toggleActions: "play reverse play reverse",
  },
});

tl.to(".groups-text", {
  opacity: 0,
  duration: 1.5,
  y: 0,
  x: 0,
});
tl.to(".groups-text", {
  opacity: 1,
  duration: 1.5,
  delay: 2,
  scaleX: 1.3,
  ease: "sine.out",
});

gsap.set(".INTRO", {
  opacity: 1,
  stagger: 0.1,
  duration: 3.8,
});

// för grupp ställning
gsap.set(".tabler", {
  opacity: 0,
  stagger: 0.1,
  duration: 1,
});
let grupper = gsap.timeline({
  scrollTrigger: {
    trigger: ".tabler",
    start: "+=10 95%",
    scrub: 1,
    toggleActions: "play reverse play reverse",
  },
});

grupper.to(".tabler", {
  opacity: 0.8,
  duration: 1,
  delay: 1.4,
  y: 0,
  x: 0,
});
grupper.to(".tabler", {
  opacity: 1,
  duration: 1.5,
  ease: "sine.out",
});

let sections = gsap.utils.toArray(".players");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".playersection",
    pin: true,
    scrub: 1,

    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3000",
  },
});

//för history
let history = gsap.timeline({
  scrollTrigger: {
    opacity: 0,
    trigger: ".another1",
    scrub: 1,
    toggleActions: "play reverse play reverse",
  },
});
history.from(".another1", {
  opacity: 0,
  duration: 1.5,
  scale: 0.1,
  y: 0,
  x: 0,

});
history.to(".another1", {
  opacity: 1,
  duration: 1.5,
  delay: 2,
  ease: "back",
});

let history2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".another3",
    scrub: 1,
    toggleActions: "play reverse play reverse",
  },
});
history2.to(".another3", {
  opacity: 0,
  duration: 1.5,
  y: 0,
  x: 0,
});

history2.to(".another3", {
  opacity: 1,
  duration: 1.5,
  delay: 2,
  scale: 0.1,
  ease: "back",
});



//för memories

let memosect = gsap.timeline({
  scrollTrigger: {
    opacity: 0,
    trigger: ".memosection",
    scrub: 1,
    toggleActions: "start reverse play reverse",
  },
});
//för bilden
memosect.from(".memosection", {
  opacity: 0,
  duration: 1,
  ease: "back",


});

memosect.to(".memosection", {
  opacity: 1,
  duration: 1,
  ease: "sine.out",
});




let minnen = gsap.timeline({
  scrollTrigger: {
    opacity: 0,
    trigger: ".textmemo",
    scrub: 1,
    toggleActions: "start reverse play reverse",
  },
});
//för bilden
minnen.from(".textmemo", {
  opacity: 0,
  duration: 4,
  ease: "sine.out",
  delay: 10

});

minnen.to(".textmemo", {
  opacity: 1,
  duration: 3.8,
  ease: "sine.out",
});



let suarez = function () {


  let minnen = gsap.timeline({
    scrollTrigger: {
      opacity: 0,
      trigger: ".memobildsz",
      scrub: 1,
      toggleActions: "start reverse play reverse",
    },
  });
  //för bilden
  minnen.from(".memobildsz", {
    opacity: 0,
    duration: 4,
    ease: "sine.out",
    delay: 10

  });

  minnen.to(".memobildsz", {
    opacity: 1,
    duration: 3.8,
    ease: "sine.out",
  });



  //för titeln till beskrivning
  minnen.from(".memointrosz", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memointrosz", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })





  //för beskrivning
  minnen.from(".memostorysz", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memostorysz", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })
  minnen.to(".memobildsz", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  });

  minnen.to(".memointrosz", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


  minnen.to(".memostorysz", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


}

suarez()


let sweden = function () {


  let minnen = gsap.timeline({
    scrollTrigger: {
      opacity: 0,
      trigger: ".memobildhl",
      scrub: 1,
      toggleActions: "start reverse play reverse",
    },
  });
  //för bilden
  minnen.from(".memobildhl", {
    opacity: 0,
    duration: 4,
    ease: "sine.out",
    delay: 10

  });

  minnen.to(".memobildhl", {
    opacity: 1,
    duration: 3.8,
    ease: "sine.out",
  });



  //för titeln till beskrivning
  minnen.from(".memointrohl", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memointrohl", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })





  //för beskrivning
  minnen.from(".memostoryhl", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memostoryhl", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })
  minnen.to(".memobildhl", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  });

  minnen.to(".memointrohl", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


  minnen.to(".memostoryhl", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


}

sweden()


let kick = function () {


  let minnen = gsap.timeline({
    scrollTrigger: {
      opacity: 0,
      trigger: ".memobildkick",
      scrub: 1,
      toggleActions: "start reverse play reverse",
    },
  });
  //för bilden
  minnen.from(".memobildkick", {
    opacity: 0,
    duration: 4,
    ease: "sine.out",
    delay: 10

  });

  minnen.to(".memobildkick", {
    opacity: 1,
    duration: 3.8,
    ease: "sine.out",
  });



  //för titeln till beskrivning
  minnen.from(".memointrokick", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memointrokick", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })





  //för beskrivning
  minnen.from(".memostorykick", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memostorykick", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })
  minnen.to(".memobildkick", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  });

  minnen.to(".memointrokick", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


  minnen.to(".memostorykick", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


}

kick()


let baggio = function () {


  let minnen = gsap.timeline({
    scrollTrigger: {
      opacity: 0,
      trigger: ".memobildbaggio",
      scrub: 1,
      toggleActions: "start reverse play reverse",
    },
  });
  //för bilden
  minnen.from(".memobildbaggio", {
    opacity: 0,
    duration: 4,
    ease: "sine.out",
    delay: 10

  });

  minnen.to(".memobildbaggio", {
    opacity: 1,
    duration: 3.8,
    ease: "sine.out",
  });



  //för titeln till beskrivning
  minnen.from(".memointrobaggio", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memointrobaggio", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })





  //för beskrivning
  minnen.from(".memostorybaggio", {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
  });
  minnen.to(".memostorybaggio", {
    opacity: 1,
    duration: 1.5,
    ease: "sine.out",
  })
  minnen.to(".memobildbaggio", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  });

  minnen.to(".memointrobaggio", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


  minnen.to(".memostorybaggio", {
    opacity: 0,
    duration: 1.5,
    ease: "sine.out",
  })


}

baggio()
