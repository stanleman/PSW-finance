import React from "react";

function Hero() {
  return (
    <div className="mt-[50px]">
      <section class="">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Master Your Money.
              <strong class="font-extrabold text-primary sm:block">
                Sail Toward Success.
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl/relaxed">
              Set sail on your financial journey. Craft your budget, navigate
              your expenses, and secure a prosperous future.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary/90 hover:scale-105 duration-200 focus:outline-none focus:ring  sm:w-auto"
                href="/dashboard"
              >
                Get Started Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
