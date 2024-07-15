"use client";

import { motion } from "framer-motion";

const Page1 = () => {
  return (
    <div className="relative h-[200vh]">
      <motion.div
        whileInView={{ opacity: 0.5 }}
        viewport={{ amount: 1 }}
        transition={{ duration: 1, type: "tween" }}
        className="w-full h-screen sticky top-0"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/featured/ultra-hd-wazf67lzyh5q7k32.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></motion.div>

      <p className="text-white relative font-semibold text-2xl w-1/2 mx-auto text-justify">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        sed ipsa labore eligendi ipsam nihil cumque corrupti hic perspiciatis
        debitis nemo aut unde et rerum a sint, animi voluptatem veniam
        accusamus? Provident temporibus vero quos aliquam nihil accusamus quod
        ut voluptate reprehenderit fuga iusto unde, eligendi culpa itaque saepe
        repellendus non eaque, ex ipsam odio. Ipsum modi reiciendis sed quisquam
        dolorum, illo nesciunt consequuntur pariatur natus excepturi aut cumque
        inventore debitis ut vel similique ad neque asperiores a. Atque
        voluptatum deleniti quos numquam accusamus laboriosam. Veniam beatae
        expedita, consequatur amet eveniet eum repellat, quisquam cum, ipsum
        eius excepturi aliquid eaque.
      </p>
      <p className="text-white relative font-semibold text-2xl w-1/2 mx-auto text-justify mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
        sed ipsa labore eligendi ipsam nihil cumque corrupti hic perspiciatis
        debitis nemo aut unde et rerum a sint, animi voluptatem veniam
        accusamus? Provident temporibus vero quos aliquam nihil accusamus quod
        ut voluptate reprehenderit fuga iusto unde, eligendi culpa itaque saepe
        repellendus non eaque, ex ipsam odio. Ipsum modi reiciendis sed quisquam
        dolorum, illo nesciunt consequuntur pariatur natus excepturi aut cumque
        inventore debitis ut vel similique ad neque asperiores a. Atque
        voluptatum deleniti quos numquam accusamus laboriosam. Veniam beatae
        expedita, consequatur amet eveniet eum repellat, quisquam cum, ipsum
        eius excepturi aliquid eaque.
      </p>
    </div>
  );
};

export default Page1;

const PageContent2 = () => {
  return (
    <div
      className="w-full h-screen sticky top-0"
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/370260.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};
