import { ScrollArea } from "@/components/ui/scroll-area";
import React from "react";

const Cart = () => {
  return (
    <div className="mt-4">
      <h1 className="font-inter font-semibold text-2xl px-6">Your Cart</h1>
      <div className="my-4">
        <ScrollArea className="h-[55vh] mt-2 px-6">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsam fugiat praesentium voluptates, quia sed mollitia rerum nisi vitae neque nulla sit repudiandae, repellat atque quas totam ipsum. Aliquid laudantium nostrum consequatur voluptate aspernatur voluptates beatae unde in? Facere ducimus laborum adipisci quidem sunt perferendis quasi, perspiciatis aliquid distinctio. Dolore minima impedit facere quo aperiam perferendis, distinctio autem praesentium qui animi accusamus eligendi porro amet iste? Reiciendis laudantium impedit blanditiis, cumque, sint perferendis quod vel ipsam omnis enim quas adipisci, dolore eum error culpa sit libero expedita ullam repellat unde sapiente maxime nisi magni similique! Temporibus vel earum minus placeat facilis quod sit animi aut officiis incidunt a, possimus pariatur modi odit minima nesciunt saepe iste ratione quas commodi consectetur unde eveniet neque. Ab necessitatibus iste commodi voluptatibus delectus minima inventore corrupti nam temporibus recusandae beatae ex blanditiis excepturi, alias sequi atque unde provident ipsa quod possimus voluptatum iusto placeat esse! Ratione amet repellat necessitatibus, natus aliquid tempora saepe. Repellendus voluptas non, corrupti iure ex quaerat sit eaque necessitatibus architecto dolores officiis unde quidem est? Fugiat amet illum, accusamus quaerat iste ea laborum, autem ipsa veniam ipsum quas fuga eum explicabo. Suscipit maxime quibusdam qui illo expedita aut provident cupiditate aspernatur ex numquam, obcaecati magnam voluptatem reprehenderit eum officiis corporis blanditiis dicta vel nam possimus vitae, enim dignissimos. Libero maiores porro, praesentium esse iste odio voluptates architecto ipsam autem eligendi dignissimos molestias aliquam non ipsa ipsum facilis ea minus ad voluptas consequatur. Voluptate earum animi sunt et quo quibusdam accusamus deserunt perferendis voluptatibus officiis? Laboriosam molestias accusantium consectetur aliquam laborum laudantium et? Hic, tenetur cupiditate? Eos explicabo maiores excepturi alias, accusamus labore officia fugit veniam quos, nobis iusto minus perspiciatis ad recusandae, dolorem in fuga? Dolore odit recusandae quidem quia soluta magni dignissimos ab quibusdam earum sed minima impedit aliquam saepe ipsam neque, in, temporibus fugit at harum pariatur ratione dicta, ex eveniet! Provident nesciunt, beatae deserunt, magni sunt illum sapiente accusamus eaque doloribus voluptate repellendus, libero sequi perferendis. Qui, nam dolore blanditiis cum tempora quibusdam delectus ea. Porro qui error tempora esse consequatur et tempore dicta tenetur ipsa nisi deserunt placeat quo a laudantium, illum ullam saepe. Praesentium repellat quasi facere nam qui voluptatum culpa, consequatur eum assumenda, soluta dolores! Sit odio inventore expedita illum non fugit in dignissimos ipsum obcaecati ad unde, adipisci totam consectetur aperiam itaque. Quis, quibusdam enim veritatis saepe quam similique sunt fugiat autem repudiandae, possimus laborum veniam consectetur, placeat accusantium inventore non aliquam! Sit molestias ipsum, ullam rem provident mollitia architecto? Ullam, dolore. Adipisci a nisi voluptate cupiditate eaque veniam deleniti omnis perspiciatis et! Quam ad eum rerum in distinctio voluptatem laborum nisi neque dignissimos commodi voluptates numquam nulla, soluta, quos sapiente! Exercitationem, cum molestias? Consequuntur explicabo quae asperiores non quisquam? Nemo aspernatur optio reiciendis quisquam fugit minus, eius libero officiis est dicta? Veniam optio reiciendis ipsam in similique quas corporis illum distinctio sed illo architecto dolore libero eos, deserunt repudiandae laboriosam quae harum. Nulla aut voluptatem quam ipsa, nesciunt reiciendis totam dignissimos labore!</div>
        </ScrollArea>
        <div className="flex flex-col gap-y-4 px-6 py-8 bg-white shadow-md">
          <div className="flex items-center justify-between">
            <h3 className="font-inter text-black font-semibold text-base">Subtotal <span className="font-normal text-sm">(2 items)</span></h3>
            <h3 className="font-inter text-black font-semibold text-base">$202</h3>
          </div>
          <button className="uppercase bg-candy-dark-900 text-white py-3 font-inter font-normal text-sm tracking-[1.4px] leading-[16.8px]">continue to checkout</button>
          <p className="text-center text-black text-xs font-inter font-semibold">Psst, get it now before it sells out.</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
