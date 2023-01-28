class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + '-' + this.singer;
    }
}

const musicList = [
    new Music('Mandalina Bahçesi' , 'Mandalina Bahçesi Film Müziği' , '1.jfif', '1.mp3'),
    new Music('Yıldızlar Arası' , 'Hans Zimmer' , '2.jfif', '2.mp3'),
    new Music('Başlangıç' , 'Hans Zimmer' , '3.jfif', '3.mp3'),
]