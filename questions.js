/* 3000 pertanyaan Couple Card — dibuat deterministik (urutan sama di kedua HP) */
const P=s=>s.trim().split("\n").map(l=>l.split("|"));
const ORIG=P(`Apa mimpi terbesarmu?|What is your biggest dream?
Apa kenangan masa kecil favoritmu?|What is your favorite childhood memory?
Kapan pertama kali kamu merasa jatuh cinta padaku?|When did you first fall for me?
Apa yang paling kamu rindukan dariku saat jauh?|What do you miss most about me when we're apart?
Apa ketakutan terbesarmu?|What is your biggest fear?
Makanan apa yang bikin kamu bahagia?|What food makes you happy?
Apa kesan pertamamu tentangku?|What was your first impression of me?
Hal kecil apa yang bikin harimu lebih baik?|What small thing makes your day better?
Kalau bisa teleport sekarang, kamu mau ke mana bersamaku?|If you could teleport now, where would we go together?
Apa kebiasaan anehmu yang belum kuketahui?|What's a weird habit of yours I don't know yet?
Lagu apa yang mengingatkanmu padaku?|Which song reminds you of me?
Apa hal paling berani yang pernah kamu lakukan?|What is the bravest thing you've ever done?
Bagaimana bayangan hari tua kita?|How do you picture us when we're old?
Apa yang paling kamu syukuri hari ini?|What are you most grateful for today?
Film apa yang ingin kamu tonton bersamaku?|What movie do you want to watch with me?
Apa momen paling memalukan dalam hidupmu?|What's your most embarrassing moment?
Apa bahasa cintamu?|What is your love language?
Apa yang bikin kamu merasa dicintai?|What makes you feel loved?
Kalau kita bertemu besok, apa yang pertama kamu lakukan?|If we met tomorrow, what's the first thing you'd do?
Apa pelajaran hidup terpentingmu?|What's the most important life lesson you've learned?
Siapa orang yang paling berpengaruh dalam hidupmu?|Who has influenced your life the most?
Apa yang ingin kamu ubah dari dirimu?|What would you like to change about yourself?
Apa liburan impianmu?|What is your dream vacation?
Apa yang bikin kamu cemburu?|What makes you jealous?
Kapan terakhir kali kamu menangis, dan kenapa?|When did you last cry, and why?
Apa panggilan sayang favoritmu untukku?|What's your favorite nickname for me?
Apa hal paling romantis yang pernah kamu lakukan?|What's the most romantic thing you've ever done?
Seperti apa rumah impian kita?|What does our dream home look like?
Kamu lebih suka pagi atau malam? Kenapa?|Morning or night person? Why?
Apa hobi yang ingin kamu coba bersamaku?|What hobby do you want to try with me?
Apa yang kamu pelajari dari hubungan LDR kita?|What have you learned from our long-distance relationship?
Apa hal tersulit dari LDR menurutmu?|What's the hardest part of LDR for you?
Apa hal terbaik dari LDR kita?|What's the best part of our LDR?
Apa yang ingin kamu lakukan bareng saat kita bertemu nanti?|What do you want to do together when we finally meet?
Apa yang kamu pikirkan sebelum tidur?|What do you think about before sleeping?
Siapa tokoh fiksi yang paling mirip denganmu?|Which fictional character is most like you?
Kekuatan super apa yang kamu mau?|What superpower would you want?
Apa yang bikin kamu tertawa terbahak-bahak?|What makes you laugh out loud?
Hal apa dariku yang bikin kamu gemas?|What do I do that you find adorable?
Apa rahasia kecil yang belum pernah kamu ceritakan?|What little secret have you never told anyone?
Pencapaian apa yang paling kamu banggakan?|What achievement are you proudest of?
Bagaimana caramu menghadapi stres?|How do you deal with stress?
Apa yang kamu butuhkan saat sedang sedih?|What do you need when you're sad?
Kalau menang lotre, apa yang pertama kamu beli?|If you won the lottery, what would you buy first?
Nilai hidup apa yang paling penting bagimu?|What value matters most to you in life?
Apa yang bikin kamu tertarik padaku?|What attracted you to me?
Tempat mana yang bikin kamu merasa paling tenang?|Where do you feel most at peace?
Apa yang ingin kamu ucapkan tapi belum sempat?|What have you wanted to say but haven't yet?
Seperti apa pernikahan impianmu?|What does your dream wedding look like?
Berapa anak dan hewan peliharaan yang kamu mau?|How many kids and pets do you want?
Siapa nama anak kita nanti?|What would we name our kids?
Apa kebiasaanku yang paling kamu suka?|What habit of mine do you like the most?
Apa kebiasaanku yang kadang bikin kamu kesal?|What habit of mine sometimes annoys you?
Kapan kamu merasa paling dekat denganku?|When did you feel closest to me?
Seperti apa kencan virtual paling seru versimu?|What's your idea of the best virtual date?
Kata-kata apa yang ingin sering kamu dengar dariku?|What words do you want to hear from me more often?
Apa kenangan favoritmu tentang kita?|What's your favorite memory of us?
Di mana kamu melihat dirimu 5 tahun lagi?|Where do you see yourself in 5 years?
Apa hal yang paling kamu sesali?|What is something you regret?
Siapa sahabat terbaikmu dan kenapa?|Who is your best friend and why?
Seperti apa akhir pekan idealmu?|What does your perfect weekend look like?
Apa kelemahan terbesarmu?|What is your biggest weakness?
Apa kelebihan terbesarmu menurutmu?|What do you think is your greatest strength?
Hewan apa yang menggambarkan dirimu?|Which animal describes you best?
Apa hal teraneh yang pernah kamu makan?|What's the weirdest thing you've eaten?
Apa cita-cita masa kecilmu?|What did you want to be as a kid?
Bagaimana cara kita menyelesaikan masalah dengan baik?|How can we best solve problems together?
Apa yang membuatmu merasa aman bersamaku?|What makes you feel safe with me?
Apa yang bikin kamu ragu dalam hubungan ini?|What makes you doubt things in this relationship?
Apa yang kamu harap lebih sering kulakukan?|What do you wish I did more?
Kapan kamu merasa bangga padaku?|When have you been proud of me?
Kejutan apa yang ingin kamu berikan padaku?|What surprise would you love to give me?
Apa kado terbaik yang pernah kamu terima?|What's the best gift you've ever received?
Apa yang ingin kamu lakukan sebelum umur 40?|What do you want to do before you turn 40?
Bagaimana pendapatmu tentang uang dan masa depan?|How do you feel about money and the future?
Kota mana yang ingin kita tinggali bersama?|Which city would you like us to live in?
Apa yang bikin kamu insecure?|What makes you feel insecure?
Apa yang kamu lakukan saat kangen aku?|What do you do when you miss me?
Apa mimpi teraneh yang pernah kamu alami?|What's the strangest dream you've had?
Tradisi apa yang ingin kita buat berdua?|What tradition do you want us to create?
Masakan apa yang ingin kamu buat bersamaku?|What dish do you want to cook together?
Lagu apa yang ingin kamu nyanyikan untukku?|What song would you sing for me?
Apa hal paling gila yang ingin kamu lakukan bersamaku?|What's the craziest thing you want to do with me?
Bagaimana kamu ingin dikenang?|How do you want to be remembered?
Apa buku atau serial favoritmu?|What's your favorite book or series?
Apa yang kamu pelajari dari kegagalan?|What have you learned from failure?
Pertengkaran kita yang mana yang paling kamu ingat?|Which argument of ours do you remember most?
Apa yang bikin kamu bersyukur punya aku?|What makes you grateful to have me?
Apa tiga kata yang menggambarkan hubungan kita?|What three words describe our relationship?
Apa yang ingin kamu perbaiki dalam hubungan kita?|What would you improve in our relationship?
Apa yang kamu lakukan pertama kali saat bangun tidur?|What do you do first when you wake up?
Apa rahasia kebahagiaan menurutmu?|What's the secret to happiness in your opinion?
Janji kecil apa yang ingin kamu buat untukku?|What small promise do you want to make to me?
Siapa yang lebih sabar di antara kita?|Which of us is more patient?
Sifatku yang mana yang ingin kamu tiru?|Which of my traits do you admire?
Apa yang kamu bayangkan saat kita bertemu lagi?|What do you imagine for our next reunion?
Apa yang paling bikin kamu rindu rumah?|What do you miss most about home?
Bagaimana kamu ingin merayakan ulang tahun hubungan kita?|How do you want to celebrate our anniversary?
Apa harapanmu untuk kita setahun ke depan?|What do you hope for us in the next year?
Apa yang ingin kamu katakan padaku sekarang?|What do you want to tell me right now?`);
const WYR=P(`nonton film bareng|watch a movie together
masak bareng lewat video call|cook together over a video call
jalan-jalan keliling kota|wander around a city together
kemping di bawah bintang|camp under the stars
liburan ke pantai|take a beach holiday
liburan ke gunung|take a mountain trip
main game bareng semalaman|play games together all night
ngobrol sampai pagi|talk until sunrise
dikirimi surat tulisan tangan|receive a handwritten letter
dikirimi paket kejutan|receive a surprise package
dengar suaraku tiap malam|hear my voice every night
dapat pesan manis tiap pagi|get a sweet message every morning
pergi ke konser bareng|go to a concert together
keliling dunia berdua|travel the world together
tinggal di desa yang tenang|live in a quiet village
tinggal di kota yang ramai|live in a busy city
punya kucing|have a cat
punya anjing|have a dog
bangun pagi untuk olahraga bareng|wake up early to exercise together
begadang nonton serial bareng|stay up late watching a series together
makan malam romantis di rumah|have a romantic dinner at home
makan jajanan kaki lima bareng|eat street food together
menari di bawah hujan|dance in the rain
menyanyikan lagu untukku di depan umum|sing a song for me in public
bikin video lucu berdua|make a funny video together
belajar bahasa baru bareng|learn a new language together
menanam tanaman bareng|grow plants together
mendekorasi rumah impian kita|decorate our dream home
bikin kapsul waktu untuk kita|make a time capsule for us
ketemu tiap bulan sebentar|meet briefly every month
ketemu setahun sekali tapi lama|meet once a year for a long time
video call tiap hari|video call every day
telepon sesekali saja|call only now and then
kirim foto tiap hari|send photos every day
kirim voice note panjang|send long voice notes
dikejutkan di depan pintu rumah|get surprised at my front door
merencanakan kejutan untukku|plan a surprise for me
naik balon udara|ride a hot air balloon
naik bianglala berdua|ride a ferris wheel together
berenang di laut bareng|swim in the sea together
bikin playlist bersama|build a playlist together
menulis cerita tentang kita|write a story about us
foto di photobooth bareng|take photobooth pictures together
nonton matahari terbit|watch the sunrise together
nonton matahari terbenam|watch the sunset together
bikin kue bareng|bake a cake together
belajar alat musik bareng|learn an instrument together
ikut lomba lari bareng|join a running race together
jalan kaki tanpa tujuan|walk with no destination
piknik di taman|have a picnic in the park`);
const TOT=P(`kopi|coffee
teh|tea
pizza|pizza
burger|burgers
nasi goreng|fried rice
mie ayam|chicken noodles
bakso|meatball soup
sate|satay
es krim|ice cream
cokelat|chocolate
boba|bubble tea
martabak manis|sweet martabak
pantai|the beach
gunung|the mountains
hujan|rainy days
cuaca cerah|sunny days
pagi hari|mornings
malam hari|nights
kucing|cats
anjing|dogs
buku|books
film|movies
musik|music
game|video games
sepak bola|football
renang|swimming
hoodie|hoodies
kaos oblong|t-shirts
sepatu kets|sneakers
pelukan|hugs
ciuman di kening|forehead kisses
surat tulisan tangan|handwritten letters
voice note|voice notes
foto|photos
bunga|flowers
kado kecil|small gifts
kejutan|surprises
rencana matang|careful plans
spontanitas|spontaneity
kota besar|big cities
desa yang tenang|quiet villages
matahari terbit|sunrises
matahari terbenam|sunsets
langit berbintang|starry skies
es teh manis|sweet iced tea
keripik|chips
camilan manis|sweet snacks
camilan asin|salty snacks`);
const FAV=P(`makanan|food
minuman|drink
lagu|song
film|movie
serial|series
buku|book
warna|color
hewan|animal
kota|city
tempat liburan|vacation spot
olahraga|sport
game|game
aroma|scent
musim|season
cuaca|weather
jajanan|snack
kafe|cafe
hari dalam seminggu|day of the week
aplikasi|app
kartun|cartoon
penyanyi|singer
aktor|actor
bunga|flower
buah|fruit
minuman hangat|hot drink
makanan penutup|dessert
tempat makan|restaurant
bunyi|sound
kata|word
angka|number
kenangan|memory
tradisi|tradition
hobi|hobby
mata pelajaran|school subject
pakaian|piece of clothing
sepatu|pair of shoes
gaya rambut|hairstyle
momen dalam sehari|moment of the day
perayaan|celebration
pelajaran hidup|life lesson`);
const SCN=P(`kita ketemu hari ini|we met today
kita tinggal serumah|we lived together
kita nyasar di kota asing|we got lost in a foreign city
kita kehabisan uang saat liburan|we ran out of money on vacation
kita nonton bioskop berdua|we watched a movie in a theater together
kita masak bareng|we cooked together
kita ketinggalan kereta|we missed our train
kita terjebak hujan seharian|we were stuck in the rain all day
kita lagi berantem|we were having a fight
kita merayakan ulang tahunmu|we celebrated your birthday
kita bangun tidur bersebelahan|we woke up next to each other
kita pergi ke pantai|we went to the beach
kita mendaki gunung bareng|we hiked a mountain together
kita menang undian liburan|we won a free holiday
kita mengalami mati lampu semalaman|we had a blackout all night
kita ketemu teman lama di jalan|we ran into an old friend
kita ikut kelas dansa|we took a dance class
kita punya sehari bebas tanpa HP|we had one phone-free day
kita pindah ke negara baru|we moved to a new country
kita membuka usaha kecil bareng|we opened a small business together
kita mengadopsi anak kucing|we adopted a kitten
kita menginap di hotel mewah|we stayed in a fancy hotel
kita naik kereta malam bareng|we took a night train together
kita nonton band favoritmu secara langsung|we saw your favorite band live
kita main game berdua sampai larut|we played games together until late
kita bertukar hidup sehari|we swapped lives for a day
kita terkunci di dalam rumah|we got locked in the house
kita liburan ke Jepang|we traveled to Japan
kita menikah besok|we got married tomorrow
kita melihat bintang jatuh|we watched a shooting star
kita dapat libur panjang berdua|we got a long break together
kita makan di warung pinggir jalan|we ate at a roadside stall
kita mengunjungi kampung halamanmu|we visited your hometown
kita bertemu orang tuamu|we met your parents
kita keliling pasar malam|we wandered a night market
kita video call selama 24 jam|we stayed on a video call for 24 hours
kita keliling kota naik motor|we rode around town on a scooter
kita menginap di vila pegunungan|we stayed in a mountain villa
kita berdansa di dapur|we danced in the kitchen
salah satu dari kita sakit|one of us got sick`);
const MOOD=P(`kamu lagi senang|you're happy
kamu lagi sedih|you're sad
kamu lagi capek|you're tired
kamu lagi kangen aku|you miss me
kamu nggak bisa tidur|you can't sleep
kamu lagi bosan|you're bored
kamu lagi kesal|you're annoyed
kamu lagi bingung|you're confused
kamu lagi sakit|you're sick
kamu lagi sendirian|you're alone
kamu lagi stres|you're stressed
kamu lagi cemas|you're anxious
kamu lagi semangat|you're excited
kamu merasa kesepian|you feel lonely
kamu jatuh cinta padaku lagi|you're falling for me all over again
kamu baru dapat kabar baik|you just got good news`);
let seed=20260612;const rg=()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};
const sf=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(rg()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const pairs=(l,f)=>{const o=[];for(let i=0;i<l.length;i++)for(let j=i+1;j<l.length;j++){const x=rg()<.5;o.push(f(x?l[i]:l[j],x?l[j]:l[i]))}return o};
const cross=(l,fr,sl)=>{const o=[];for(const a of l)for(const f of fr)for(const b of(sl||[0]))o.push(f(a,b));return o};
const wyr=pairs(WYR,(a,b)=>["Pilih mana: "+a[0]+" atau "+b[0]+"?","Would you rather "+a[1]+" or "+b[1]+"?"]);
const fav=cross(FAV,[t=>["Apa "+t[0]+" favoritmu, dan kenapa?","What's your favorite "+t[1]+", and why?"],t=>["Apa "+t[0]+" yang mengingatkanmu padaku?","What "+t[1]+" reminds you of me?"],t=>["Apa "+t[0]+" yang paling tidak kamu suka?","What "+t[1]+" do you like the least?"],t=>["Ceritakan "+t[0]+" yang paling berkesan bagimu!","Tell me about the most memorable "+t[1]+" for you!"],t=>["Apa "+t[0]+" yang ingin kamu tunjukkan padaku?","What "+t[1]+" do you want to show me?"]]);
const R=[["lakukan","do"],["katakan padaku","say to me"],["rasakan","feel"],["ingat","remember"]];
const scn=cross(SCN,[(s,r)=>["Kalau "+s[0]+", apa yang paling ingin kamu "+r[0]+"?","If "+s[1]+", what do you most want to "+r[1]+"?"],(s,r)=>["Seandainya "+s[0]+", apa yang akan langsung kamu "+r[0]+"?","Imagine "+s[1]+": what would you immediately "+r[1]+"?"]],R);
const mood=cross(MOOD,[m=>["Apa yang kamu lakukan saat "+m[0]+"?","What do you do when "+m[1]+"?"],m=>["Apa yang paling kamu butuhkan dariku saat "+m[0]+"?","What do you need most from me when "+m[1]+"?"],m=>["Pesan seperti apa yang ingin kamu terima dariku saat "+m[0]+"?","What kind of message do you want from me when "+m[1]+"?"],m=>["Apa yang biasanya kamu pikirkan saat "+m[0]+"?","What usually goes through your mind when "+m[1]+"?"],m=>["Lagu apa yang cocok untukmu saat "+m[0]+"?","What song fits you when "+m[1]+"?"]]);
const tot=pairs(TOT,(a,b)=>["Lebih suka mana: "+a[0]+" atau "+b[0]+"?","Which do you prefer: "+a[1]+" or "+b[1]+"?"]);
const Q=[],QC=[],QN=["Deep Talk","Pilih Salah Satu","Lebih Suka Mana","Favorit","Seandainya","Curhat"];
const add=a=>{QC.push([Q.length,Q.length+a.length]);for(const x of a)Q.push(x)};
const fixed=ORIG.length+wyr.length+fav.length+scn.length+mood.length;
add(ORIG);add(sf(wyr));add(sf(tot).slice(0,3000-fixed));add(sf(fav));add(sf(scn));add(sf(mood));
const qcat=i=>{for(let k=0;k<QC.length;k++)if(i<QC[k][1])return QN[k];return""};
