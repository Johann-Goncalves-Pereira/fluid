import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "@components/footer/footer";
import { Fluid } from "@components/global";
import { Header } from "@components/header/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main class="col-span-1 col-start-2 row-span-1 row-start-2">
        <Slot />
      </main>
      <Footer />
      <Fluid />
    </>
  );
});
