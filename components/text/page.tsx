import { motion } from "framer-motion";

const TextPage = () => {
  return (
    <div className="bg-black text-white px-72 py-20 flex flex-col gap-24 font-thin text-2xl text-justify">
      <motion.p
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio provident
        voluptas cupiditate nisi obcaecati numquam ea reprehenderit blanditiis
        error a doloribus porro, rem suscipit deserunt ipsum, aliquam quisquam
        officia possimus accusamus ab? Praesentium aliquid id saepe nulla ab
        laborum, ipsum velit earum cum soluta odit, possimus dolorum inventore
        optio quasi.
      </motion.p>

      <motion.p
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1.7,
          delay: 0.3,
          type: "spring",
          stiffness: 80,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt,
        velit? Placeat libero voluptatibus non alias veniam asperiores sapiente
        deserunt. Fugiat quaerat, illo vitae repellat sed aut? Laudantium
        aspernatur, accusantium officia incidunt harum corrupti quibusdam.
        Maxime vel odit eligendi, adipisci libero, quia tempore mollitia amet
        animi ad expedita dolorum omnis atque.
      </motion.p>

      <motion.p
        initial={{ x: 200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 100 }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
        quibusdam numquam repudiandae nostrum, ea placeat. Consequatur provident
        vero ex, eveniet reiciendis quo ab iure fugiat error magni accusantium
        ea incidunt optio ut cum earum explicabo facere! Ducimus dolore quos
        mollitia sint, doloremque labore nihil inventore, consequatur voluptates
        ad iure! Beatae.
      </motion.p>
    </div>
  );
};

export default TextPage;
