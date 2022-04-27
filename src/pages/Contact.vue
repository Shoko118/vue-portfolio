<script setup></script>

<template>
  <div>
    <div class="mx-auto w-full pt-20 pb-20">
      <div class="mx-auto w-[70%]">
        <form class="max-w-xl" action="https://formsubmit.co/secast118@gmail.com" method="POST">
          <input type="hidden" name="_captcha" value="false" />
          <h1 class="font-bold text-3xl sm:text-4xl">Contact</h1>
          <p class="text-base pb-10 pt-8">
            Get in touch or shoot me an email directly on
            <span class="font-bold underline underline-offset-4 decoration-amber-500">secast118@gmail.com</span>
          </p>
          <div class="pb-5">
            <h2 class="text-base">Name:</h2>
            <input
              class="text-black w-full sm:w-[35%] py-2 px-3 rounded-sm"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
          </div>
          <div class="pb-5">
            <h2>Email:</h2>
            <input type="hidden" name="_autoresponse" value="Thank you for reaching out to me. Let's talk soon!!" />
            <input
              class="w-full sm:w-[35%] rounded-sm py-2 px-3 text-black"
              type="email"
              name="email"
              required
              placeholder="Email Address"
            />
          </div>
          <div class="pb-5">
            <h2>Message:</h2>
            <input class="text-black w-full sm:w-[70%] rounded-md py-2 px-3" type="text" name="message" required />
          </div>
          <div
            class="px-10 py-3 text-center sm:py-2 sm:px-4 rounded-md bg-slate-700 sm:w-[15%] sm:text-center hover:bg-slate-400 transition transform ease-in-out"
          >
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
