import React from 'react';
import {AiFillStar} from 'react-icons/ai'




const RelatedCard = () => {
  return (
    <div class="relative">
      <div className="carousel-item container w-[220px]">
    <div id="card" className="card w-[220px] card-bordered border-black">
    <div id="tooltip" className="tooltip tooltip-open" data-tip="helloooooooooooooooooooooooooooooo" data-boundary="window" data-container="body">
    <button id='starbtn' class="btn-sm absolute  top-1 right-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-800">☆</button>
    </div>
  <figure><img class='w-full'src="https://nb.scene7.com/is/image/NB/mt21540ag_nb_70_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scae=10&wid=1600&hei=1600" /></figure>
  <div className="card-body" >
  <small>Hoodies & Sweaters</small>
    <h2 id="titleCard" className="card-title">Soft Hoodie!</h2>
    <small>$200</small>
    <small><AiFillStar/></small>
    <div className="card-actions justify-end">
    <small></small>
    </div>
  </div>
</div>
</div>
</div>

  );
}

export default RelatedCard

