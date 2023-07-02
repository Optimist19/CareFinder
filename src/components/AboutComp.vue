<template>
  <div class="about">
    <div class="para-con">
      <h1 class="first-para">Good day, welcome to Carefinder.</h1>

      <p>
        Are you tired of traveling long distances in search of quality
        healthcare? Do you wish there was a hospital closer to your home,
        providing accessible medical services when you need them the most? Well,
        I have exciting news for you!
      </p>

      <p>
        Introducing our new initiative to bring hospitals closer to you. We
        believe that healthcare should be easily accessible, and nobody should
        have to travel far and wide to receive medical attention. Our goal is to
        revolutionize healthcare by establishing state-of-the-art hospitals
        right in your neighborhood.
      </p>

      <p>
        Imagine having a modern, fully-equipped hospital just a stone's throw
        away from your doorstep. No more long and stressful journeys, no more
        wasting precious time and energy. With a hospital closer to you, you'll
        have peace of mind knowing that professional medical care is always
        within reach.
      </p>

      <p>
        By bringing hospitals closer to you, we aim to foster a healthier
        community. Accessible healthcare means faster response times, reduced
        travel expenses, and improved overall well-being. We believe that
        everyone deserves convenient access to quality medical services, and
        we're committed to making that a reality.
      </p>

      <p>
        Join us in this transformative journey towards a healthier future.
        Spread the word to your friends, family, and neighbors. Together, let's
        advocate for a hospital closer to every home, ensuring that healthcare
        is no longer a distant destination but a part of our everyday lives.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutComp",
  data() {
    return {
      canonicalUrl: ""
    };
  },

  head() {
    return {
      meta: [
        {
          name: "description",
          content:
            "This page particularly talks about the application, i.e, it helps users to be able to locate the nearest hospital around them."
        }
        // Other meta tags
      ]
    };
  },

  mounted() {
    this.$nextTick(() => {
      let hideLogIn = document.getElementById("login");
      if (hideLogIn) {
        hideLogIn.style.display = "none";
        console.log(hideLogIn, "hideLogIn");
      }

      let signup = document.getElementById("signup");
      if (signup) {
        signup.style.display = "none";
        console.log(signup, "signup");
      }
    });

    const canonicalLink = document.createElement("link");
    canonicalLink.rel = "canonical";
    canonicalLink.href = this.canonicalUrl;
    document.head.appendChild(canonicalLink);
  }
};
</script>

<style scoped>

h1 {
  font-size: 22px;
  margin: 3vh 0;
}

.about {
  background-color: rgb(255, 249, 240);
  padding-bottom: 4vh;
  height: 100;
}

.para-con {
  padding-top: 22vh;
  height: 100%;
  text-align: justify;
  margin: 0 2vw;
  font-size: 24px;
}
</style>
