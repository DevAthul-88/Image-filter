// @ts-nocheck
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let img = new Image();
let fileName = "";

const downloadBtn = document.getElementById("download-btn");
const removeBtn = document.getElementById("clear-btn");
const uploadBtn = document.getElementById("upload");

removeBtn.addEventListener("click", function () {
  Caman("#canvas", img, function () {
    this.revert();
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-btn")) {
    if (e.target.classList.contains("brightness-add")) {
      Caman("#canvas", img, function () {
        this.brightness(5).render();
      });
    } else if (e.target.classList.contains("brightness-remove")) {
      Caman("#canvas", img, function () {
        this.brightness(-5).render();
      });
    } else if (e.target.classList.contains("contrast-add")) {
      Caman("#canvas", img, function () {
        this.contrast(5).render();
      });
    } else if (e.target.classList.contains("contrast-remove")) {
      Caman("#canvas", img, function () {
        this.contrast(-5).render();
      });
    } else if (e.target.classList.contains("saturation-add")) {
      Caman("#canvas", img, function () {
        this.saturation(5).render();
      });
    } else if (e.target.classList.contains("saturation-remove")) {
      Caman("#canvas", img, function () {
        this.saturation(-5).render();
      });
    } else if (e.target.classList.contains("vibrance-add")) {
      Caman("#canvas", img, function () {
        this.vibrance(5).render();
      });
    } else if (e.target.classList.contains("vibrance-remove")) {
      Caman("#canvas", img, function () {
        this.vibrance(-5).render();
      });
    } else if (e.target.classList.contains("exposure-add")) {
      Caman("#canvas", img, function () {
        this.exposure(5).render();
      });
    } else if (e.target.classList.contains("exposure-remove")) {
      Caman("#canvas", img, function () {
        this.exposure(-5).render();
      });
    } else if (e.target.classList.contains("hue-add")) {
      Caman("#canvas", img, function () {
        this.hue(5).render();
      });
    } else if (e.target.classList.contains("hue-remove")) {
      Caman("#canvas", img, function () {
        this.hue(-5).render();
      });
    } else if (e.target.classList.contains("sepia-add")) {
      Caman("#canvas", img, function () {
        this.sepia(5).render();
      });
    } else if (e.target.classList.contains("sepia-remove")) {
      Caman("#canvas", img, function () {
        this.sepia(-5).render();
      });
    } else if (e.target.classList.contains("noise-add")) {
      Caman("#canvas", img, function () {
        this.noise(5).render();
      });
    } else if (e.target.classList.contains("noise-remove")) {
      Caman("#canvas", img, function () {
        this.noise(-5).render();
      });
    } else if (e.target.classList.contains("clip-add")) {
      Caman("#canvas", img, function () {
        this.clip(5).render();
      });
    } else if (e.target.classList.contains("clip-remove")) {
      Caman("#canvas", img, function () {
        this.clip(-5).render();
      });
    } else if (e.target.classList.contains("stackBlur-add")) {
      Caman("#canvas", img, function () {
        this.stackBlur(5).render();
      });
    } else if (e.target.classList.contains("stackBlur-remove")) {
      Caman("#canvas", img, function () {
        this.stackBlur(-5).render();
      });
    } else if (e.target.classList.contains("sharpen-add")) {
      Caman("#canvas", img, function () {
        this.sharpen(5).render();
      });
    } else if (e.target.classList.contains("sharpen-remove")) {
      Caman("#canvas", img, function () {
        this.sharpen(-5).render();
      });
    } else if (e.target.classList.contains("vintage-add")) {
      Caman("#canvas", img, function () {
        this.vintage().render();
      });
    } else if (e.target.classList.contains("lomo-add")) {
      Caman("#canvas", img, function () {
        this.lomo().render();
      });
    } else if (e.target.classList.contains("clarity-add")) {
      Caman("#canvas", img, function () {
        this.clarity().render();
      });
    } else if (e.target.classList.contains("sin-add")) {
      Caman("#canvas", img, function () {
        this.sinCity().render();
      });
    } else if (e.target.classList.contains("sunrise-add")) {
      Caman("#canvas", img, function () {
        this.sunrise().render();
      });
    } else if (e.target.classList.contains("cross-add")) {
      Caman("#canvas", img, function () {
        this.crossProcess().render();
      });
    } else if (e.target.classList.contains("orange-add")) {
      Caman("#canvas", img, function () {
        this.orangePeel().render();
      });
    } else if (e.target.classList.contains("love-add")) {
      Caman("#canvas", img, function () {
        this.love().render();
      });
    } else if (e.target.classList.contains("grungy-add")) {
      Caman("#canvas", img, function () {
        this.grungy().render();
      });
    } else if (e.target.classList.contains("jarques-add")) {
      Caman("#canvas", img, function () {
        this.jarques().render();
      });
    } else if (e.target.classList.contains("pinhole-add")) {
      Caman("#canvas", img, function () {
        this.pinhole().render();
      });
    } else if (e.target.classList.contains("old-add")) {
      Caman("#canvas", img, function () {
        this.oldBoot().render();
      });
    } else if (e.target.classList.contains("glowing-add")) {
      Caman("#canvas", img, function () {
        this.glowingSun().render();
      });
    } else if (e.target.classList.contains("days-add")) {
      Caman("#canvas", img, function () {
        this.hazyDays().render();
      });
    } else if (e.target.classList.contains("her-add")) {
      Caman("#canvas", img, function () {
        this.herMajesty().render();
      });
    } else if (e.target.classList.contains("nostalgia-add")) {
      Caman("#canvas", img, function () {
        this.nostalgia().render();
      });
    } else if (e.target.classList.contains("hemingway-add")) {
      Caman("#canvas", img, function () {
        this.hemingway().render();
      });
    } else if (e.target.classList.contains("concentrate-add")) {
      Caman("#canvas", img, function () {
        this.concentrate().render();
      });
    }
  }
});

uploadBtn.addEventListener("change", (e) => {
  const file = document.getElementById("upload").files[0];

  const reader = new FileReader();

  if (file) {
    fileName = file.name;
    reader.readAsDataURL(file);
  }

  reader.addEventListener(
    "load",
    (e) => {
      img = new Image();
      img.src = reader.result;

      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);
        canvas.removeAttribute("data-caman-id");
      };
    },
    false
  );
});

downloadBtn.addEventListener("click", (e) => {
  const fileExtension = fileName.slice(-4);

  let newFileName;

  if (fileExtension === ".jpg" || fileExtension === ".png") {
    newFileName = fileName.substring(0, fileName.length - 4 + "-filtered.jpg");
  }

  download(canvas, newFileName);
});

function download(canvas, fileName) {
  let e;

  const link = document.createElement("a");

  link.download = fileName;
  link.href = canvas.toDataURL("image/jpeg", 0.8);

  e = new MouseEvent("click");
  link.dispatchEvent(e);
}
