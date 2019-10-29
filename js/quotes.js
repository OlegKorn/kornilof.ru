(function() {
'use strict';

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  // ——————————————————————————————————————————————————
  // TextScramble1
  // ——————————————————————————————————————————————————
  var fontStr1 = "bold 13pt Helvetica Neue, Helvetica, Arial, italic, serif";


  var TextScramble1 = function () {
    function TextScramble1(el) {
      _classCallCheck(this, TextScramble1);

      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }

    TextScramble1.prototype.setText = function setText(newText) {
      var _this = this;

      var oldText = this.el.innerText;
      var length = Math.max(oldText.length, newText.length);
      var promise = new Promise(function (resolve) {
        return _this.resolve = resolve;
      });
      this.queue = [];
      for (var i = 0; i < length; i++) {
        var from = oldText[i] || '';
        var to = newText[i] || '';
        var start = Math.floor(Math.random() * 40);
        var end = start + Math.floor(Math.random() * 40);
        this.queue.push({ from: from, to: to, start: start, end: end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    };

    TextScramble1.prototype.update = function update() {
      var output = '';
      var complete = 0;
      for (var i = 0, n = this.queue.length; i < n; i++) {
        var _queue$i = this.queue[i];
        var from = _queue$i.from;
        var to = _queue$i.to;
        var start = _queue$i.start;
        var end = _queue$i.end;
        var char = _queue$i.char;

        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += '<span class="dud">' + char + '</span>';
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    };

    TextScramble1.prototype.randomChar = function randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    };

    return TextScramble1;
  }();

  // ——————————————————————————————————————————————————
  // Example
  // ——————————————————————————————————————————————————

  var phrases = [ 

  'DEMOSTHENES',
  '"Small opportunities are often..."', '"Small opportunities are often..."', '"...the beginning of great enterprises."',
  '"What we have in us of the image of God..."', '"...is the love of truth and justice."',
  '"All speech is vain and empty..."', '"...unless it be accompanied by action."',
  '"The readiest and surest way to get rid of censure,"', '"...is to correct ourselves."',
  '"Every dictator is an enemy of freedom,"', '"...an opponent of law."',
  '"Beware lest in your anxiety to avoid war..."', '"...you obtain a master."',
  '"No man who is not willing to help himself..."', '"...has any right to apply to his friends,"',
  '"or to the gods."',

  'H.P.LOVECRAFT',
  '"The world is indeed comic, but the joke is on mankind."',
  '"The process of delving into the black abyss..."', '"...is to me the keenest form of fascination."',
  '"If religion were true,"', '"...its followers would not try to bludgeon their young..."',
  '"...into an artificial conformity;"', '"...but would merely insist..."','"...on their unbending quest for truth,"', '"...irrespective of artificial backgrounds or practical consequences."',
  '"Unhappy is he to whom the memories of childhood bring only fear and sadness."',
  '"From even the greatest of horrors, irony is seldom absent."',
  '"Bunch together a group of people deliberately chosen for strong religious feelings,"',
  '"...and you have a practical guarantee..."',
  '"...of dark morbidities expressed in crime, perversion, and insanity."',

  'Arthur Helps', '"Everywhere I have sought rest and not found it,"',
  '"...except sitting in a corner by myself with a little book."',
  '"Routine is not organization, any more than paralysis is order."',
  '"A man\'s action is only a picture book of his creed."',

  'James Humes', '"The art of communication is the language of leadership."',

  'ПЕЛЕВИН', '"Была такая восточная поэма, — сказал Татарский,"','"...— я ее сам не читал, слышал только."', '"...Про то, как тридцать птиц полетели искать своего короля Семурга,"',
  '"...прошли через много разных испытаний,"', '"...а в самом конце узнали, что слово «Семург» означает «тридцать птиц»."',

  '"Жизнь — это одинокое странствие,"', 
  '"...то под палящим солнцем, то в лютый холод."',
  '"...Как часто дорога, по которой мы идем, ведет в никуда?"',
  '"...И неизвестно, где встретит нас смерть..."',
  '"...Когда вспомнишь об этом,"',
  '"...всё в мире кажется пустым и ничтожным,"',
  '"...и тогда наступает прозрение."',

  '"Вы всё равно не знаете, что с этими жизнями делать."',
  '"...И куда бы вы ни глядели, вы все равно глядите в огонь,"',
  '"...в котором сгорает ваша жизнь."',

  '"\'Homo homini lupus est\', гласит один крылатый латинизм."',
  '"...Но человек человеку уже давно не волк."',
  '"...Человек человеку даже не имиджмейкер,"',
  '"...не дилер, не киллер и не эксклюзивный дистрибьютор,"',
  '"...как предполагают современные социологи."',
  '"...Все гораздо страшнее и проще."',
  '"...Человек человеку вау — и не человеку, а такому же точно вау."',
  '"...Так что в проекции на современную систему культурных координат"',
  '"...это латинское изречение звучит так: Bay Bay Bay!"',

  '"...Находясь в жопе, ты можешь сделать две вещи."',
   '"...Во-первых - постараться понять, почему ты в ней находишься."',
   '"...Во-вторых - вылезти оттуда..."',
   '"...Вылезти из жопы надо всего один раз,"',
   '"...и после этого про нее можно забыть."',
   '"...А чтобы понять, почему ты в ней находишься,"',
   '"...нужна вся жизнь. Которую ты в ней и проведешь."',
   '"Священная книга оборотня"', 'ПЕЛЕВИН',
  '"Антирусский заговор, безусловно, существует, – проблема только в том,"',
   '"...что в нем участвует все взрослое население России."',
   '"Generation \'П\'"',
  'ПЕЛЕВИН',
  '"Все, чем занимаются люди, настолько безобразно,"',
   '"...что нет никакой разницы, на чьей ты стороне." - "Чапаев и Пустота"',

  'ПЕЛЕВИН', 
  '"Люди даже смутно не понимают сил, которые управляют их жизнью."',
  '"...Они не понимают смысла своей эволюции."', '"...То, что называют «прогрессом», опустило человека гораздо ниже живущего на свободе животного."',
  '"...Образ жизни зверя — есть экологически чистую пищу,', 'жить в самых подходящих для организма климатических условиях,"',
   '"...много двигаться и никогда ни о чем не волноваться', '— сегодня доступен только ушедшему на покой миллионеру."',
  '"...А обычный человек всю жизнь работает, высунув язык от усталости,', 'а потом умирает от стресса, успев только кое-как расплатиться"',
   '"...за норку в бетонном муравейнике.', 'Единственное, что он может, — это запустить в то же колесо своих детей."',

   'WALT WHITMAN', '"What do you suppose will satisfy the soul"', '"...except to walk free & own no superior?"',

  'Ἀριστοτέλης', '"It is the mark of an educated mind"', '"...to be able"', 
  '"...to entertain a thought"', '"...without accepting it."',
  'Ἀριστοτέλης', '"There is no great genius"', '"...without some touch of madness."',
  'Ἀριστοτέλης','"At his best, man is the noblest of all animals;"', '"...separated from law and justice"', '"...he is the worst."',

  'SOCRATES', '"By all means, marry."', '"...If you get a good wife, you will become happy;"', '"...if you get a bad one,"', '"...you will become a philosopher."',
  ];

  var el = document.querySelector('.quotes');
  var fx = new TextScramble1(el);

  var counter = 0;
  var next = function next() {
    fx.setText(phrases[counter]).then(function () {
      setTimeout(next, 3500);
    });
    counter = (counter + 1) % phrases.length;
  };

  next();
})();