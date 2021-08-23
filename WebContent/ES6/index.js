let x = 3;
x = 4;

{
    var y = 30;
}


// 5강. template String
let template = String.raw`<h1>\n\n</h1>`

// 6강. 향상된 객체의 표현식 #1


{
    let kor = 30;
    let eng = 40;
    let math = 50;

    let exam = {
        kor, eng, math, total() {
            return 10;
        }
    };
}


// 7강. 필요없음.
// let attr = "kor";
// let exam = {
//     [attr]:10
// };


//8강. Object Destructuring #1

{
    let exam = {
        kor: 20,
        eng: 30,
        math: 40
    };

    function print({ kor, eng }) {
        // let kor = exam.kor;
        // let eng = exam.eng;
        // let {kor, eng} = exam;
        //console.log(`kor:${kor}, eng:${eng}`);
    }

    print(exam);

}


//9강. Object Destructuring #2
{
    let exam = {
        kor: 20,
        eng: 30,
        math: 40
    };
    let {kor, eng, total = kor+eng } = exam;
    // console.log(`kor:${kor}, eng:${eng}, total:${total}`);

    exam.kor = 100;

    ({kor} = exam);
    // console.log(`kor:${kor}, eng:${eng}`);

}


//10강. Object Destructuring #3
{
    let exam = {
        kor: 20,
        eng: 30,
        math: 40,
        student:{
            name:"newlec",
            phone:"01000000000"
        }
    };

    let {kor, eng, student:{name, phone}} = exam;

    console.log(name);
}


//12. array destructuring #2
{
    let kors = [10,20,30];
    let [kor, kor2, kor3, kor4=40] = kors;
    console.log(kor4);
    
    let notices = {
        title : "1",
        list : [
            {title:"2", content:"3"}, 
            {title:"4", content:"35"}
        ]
    };

    let{list:[, notice]} = notices;
    console.log(notice.title);
}


//13. set collection
{
    let ar = [1,2,3,2,3,4,4,3];
    let set = new Set(ar);
    console.log(set.size);
}


//15. Rest Parameters
{
    function print(x,y,...values){
        console.log(`${arguments[0]}`);

        for(let i=0; i<values.length; i++)
        console.log(values[i]);

    }
    print(2,3,5,6,7);
}

//16. Spread Operator
{
    function print(x, y, z){
        console.log(`x:${x}, y:${y}, z:${z}`);
    }

    let map = new Map();
    map.set("id", 3);
    map.set("title", "hello");

    //let temp = [...map];
    console.log([...map][0][0]);
    console.log([...map][0][1]);
}


//17. default value
{
    function print(x, y=10, z=20){
        console.log(`x:${x} y:${y}`)
        console.log(arguments.length);
    }
    print(2,100);
}

//18. arrow function
{
    let nums = [13,4,6,1,3,26];

    // function compare(x, y){
    //     return x-y;
    // }
    
    nums.sort((x,y)=>x-y);

    console.log(nums);
}


//19.1) class
{
    class Exam{
        #kor;
        #eng;
        #math;
        static #info = "static HI!!!!!!";
        constructor(kor=0, eng=0, math=0){
            this.#kor = kor;
            this.#eng = eng;
            this.#math = math;
        }

        // get kor(){
        //     return this.#kor;
        // }    

        // set kor(value){
        //     this.#kor = value;
        // }

        #total(){
            return this.#kor+this.#eng+this.#math;
        }
        avg(){
            return this.#total()/3.0;
        }
        static info(){
            return Exam.#info;
        }
    }// class Exam End.

    
    console.log(Exam.info());

    // let exam = new Exam(10,20,30);
    // console.log(exam.avg());

    // exam.kor =40000;
    // console.log(exam.kor);

    let exam1 = new Exam();
    exam1.kor = 4000000;
    exam1.kor++;
    console.log(exam1.kor);

    

}

//19. 2) prototype
{
    let init = {kor:100, eng:300};

    function Exam(){

    }

    Exam.prototype = init;

    Exam.prototype.total = function(){
        return this.kor+this.eng;
    }

    let exam = new Exam();

    console.log(exam.total());
    console.log(`exam.kor:${exam.kor}`);
}








