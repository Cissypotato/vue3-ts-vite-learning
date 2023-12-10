import { onMounted } from "vue";

type Options = {
  el: string;
};

export default function (options: Options): Promise<{ base64Url: string }> {
  return new Promise((resolve) => {
    onMounted(() => {
      const img: HTMLImageElement = document.querySelector(
        options.el
      ) as HTMLImageElement;
      console.log("img", img);
      img.onload=()=>{//注意要等图片加载完成之后才执行
        resolve({ base64Url: base64(img) });
      }
      
    });
    const base64 = (el: HTMLImageElement) => {
      const canvas = document.createElement("canvas");
      const cxt = canvas.getContext("2d");
      canvas.width = el.width;
      canvas.height = el.height;
      cxt?.drawImage(el, 0, 0, el.width, el.height);
      return canvas.toDataURL("image/jpg"); //toDataURL为canvas转base64的函数
    };
  });
}
