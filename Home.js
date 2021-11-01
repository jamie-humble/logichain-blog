document.title = "LogiChain";


class Entry{
  constructor(link, title, img, date){
    this.link = link;
    this.title = title;
    this.img = img;
    this.date = date;
    this.build();
  }
  build(){
      // creation
    const root = document.createElement("div");
    const card = document.createElement("div");
    const a0 = document.createElement("a");
    const img = document.createElement("div");
    const card_title = document.createElement("h3");
    const a1 = document.createElement("a");
    const card_author = document.createElement("p");
    const content = document.createElement("div");
    const bookmark = document.createElement("span");
    const time = document.createElement("time");

    root.className = "col";
    card.className = "card card--blog";
    a0.href = this.link;
    a0.className = "card__thumb";
    a0.title = this.title;
    img.className = "card__thumb__img";
    img.style = "background-image: url(" + this.img + ")";
    content.className = "card__content";
    card_title.className = "card__title";
    a1.href = this.link;
    a1.title = a1.innerHTML = this.title;
    card_author.className = "card__author card__posted";
    bookmark.className = "posted-on bookmark";
    time.className = "this-date published updated";
    time.dateTime = time.innerHTML = this.date;

    // DOM distribution
    card_title.appendChild(a1);
    content.appendChild(card_title);
    bookmark.appendChild(time);
    card_author.appendChild(bookmark);
    content.appendChild(card_author);
    a0.appendChild(img);
    card.appendChild(a0);
    card.appendChild(content);
    root.appendChild(card);
    // final append
    const rows = document.getElementById("rows");
    rows.appendChild(root);

  }
}

var diction = [
  new Entry("ProgressEntries/entry%230/ProgressPost.html","Entry #0", "Assets/fig1SC.PNG", "Aug 7, 2021"),
  new Entry("ProgressEntries/googledocs/googleDrive.html","Google Drive", "Assets/googleDriveBanner.png", "Aug 13, 2021"),
  new Entry("ProgressEntries/entry%231/ProgressPost.html","Entry #1", "Assets/Blockchain-1200-PNG.png", "Aug 23, 2021"),
  new Entry("ProgressEntries/entry%232/ProgressPost.html","Entry #2", "Assets/blockchainbanner.png", "Aug 30, 2021"),
  new Entry("ProgressEntries/entry%233/ProgressPost.html","Entry #3", "Assets/blockchainteh.jpg", "Sep 6, 2021"),
  new Entry("ProgressEntries/entry%234/ProgressPost.html","Entry #4", "Assets/Retina-Display.jpg", "Sep 13, 2021"),
  new Entry("ProgressEntries/entry%235/ProgressPost.html","Entry #5", "Assets/blockchainfarm.jpg", "Oct 5, 2021"),
  new Entry("ProgressEntries/entry%236/ProgressPost.html","Entry #6", "Assets/manyblock.jpg", "Oct 11, 2021"),
  new Entry("ProgressEntries/entry%237/ProgressPost.html","Entry #7", "Assets/blockchainbanner.png", "Oct 18, 2021"),
  new Entry("ProgressEntries/entry%238/ProgressPost.html","Entry #8", "Assets/blockchainfarm.jpg", "Oct 26, 2021"),
  new Entry("ProgressEntries/final_address/ProgressPost.html","Final Address", "Assets/Blockchain-1200-PNG.png", "Nov 1, 2021")


];


