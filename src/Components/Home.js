import { useState } from "react";
import "./app-debug.apk";
import logo from "./Image/2.jpg";
import { Slide} from 'react-awesome-reveal'

export default function Home() {

  const [Title, setTitle] = useState("Home");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 15) {
      setTitle("About the Author");
    } else {
      setTitle("Home");
    }
  });



  return (
    <div className="start">
      <div className={`bg-1`}></div>

      <div className="PageTitle">
        <span className="Title">{Title}</span>
      </div>
      <div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>

        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
        

      </div><div className="abt">
        <Slide left delay={1000}>
        <img
          src={logo}
          className="Author"  
          alt="logo"
          width="100px"
           
        />
        </Slide>
        <Slide direction="right">
        <div className="txt">Glucose : Glucose is an aldohexose and is also known as dextrose.
        Preparation of Glucose : (a) From sucrose (cane Sugar) : H 12 22 11 2 6
        12 6 6 12 6 Sucrose Glu cos e Fructose C H O HO CH O CH O     (b)
        From Starch : H 6 10 5 n 2 6 12 6 393 K 2 3 atm Starch Glu cose (C H O )
        nH O nC H O      Structure of Glucose Open-Chain Structure :
         'D' before the name of glucose represents the configuration whereas
        '(+)' represents dextrorotatory nature of the molecule.  'D' before the
        name of glucose represents the configuration whereas '(+)' represents
        dextrorotatory nature of the molecule.
        </div>
        </Slide>
      </div>
<p>A blog (a truncation of "weblog")[1] is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) emerged, featuring the writing of multiple authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.

The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, a knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and early Web users therefore tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites.[2] In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers not only produce content to post on their blogs but also often build social relations with their readers and other bloggers.[3] However, there are high-readership blogs which do not allow comments.

Many blogs provide commentary on a particular subject or topic, ranging from philosophy, religion, and arts to science, politics, and sports. Others function as more personal online diaries or online brand advertising of a particular individual or company. A typical blog combines text, digital images, and links to other blogs, web pages, and other media related to its topic. The ability of readers to leave publicly viewable comments, and interact with other commenters, is an important contribution to the popularity of many blogs. However, blog owners or authors often moderate and filter online comments to remove hate speech or other offensive content. Most blogs are primarily textual, although some focus on art (art blogs), photographs (photoblogs), videos (video blogs or "vlogs"), music (MP3 blogs), and audio (podcasts). In education, blogs can be used as instructional resources; these are referred to as edublogs. Microblogging is another type of blogging, featuring very short posts.

'Blog' and 'blogging' are now loosely used for content creation and sharing on social media, especially when the content is long-form and one creates and shares content on regular basis. So, one could be maintaining a blog on Facebook or blogging on Instagram.

On February 16, 2011, there were over 156 million public blogs in existence. On February 20, 2014, there were around 172 million Tumblr[4] and 75.8 million WordPress[5] blogs in existence worldwide. According to critics and other bloggers, Blogger is the most popular blogging service used today. However, Blogger does not offer public statistics.[6][7] Technorati lists 1.3 million blogs as of February 22, 2014.[8]
</p>
<p>The term "weblog" was coined by Jorn Barger[9] on December 17, 1997. The short form, "blog", was coined by Peter Merholz, who jokingly broke the word weblog into the phrase we blog in the sidebar of his blog Peterme.com in April or May 1999.[10][11][12] Shortly thereafter, Evan Williams at Pyra Labs used "blog" as both a noun and verb ("to blog", meaning "to edit one's weblog or to post to one's weblog") and devised the term "blogger" in connection with Pyra Labs' Blogger product, leading to the popularization of the terms.[13]

Origins
Before blogging became popular, digital communities took many forms including Usenet, commercial online services such as GEnie, Byte Information Exchange (BIX) and the early CompuServe, e-mail lists,[14] and Bulletin Board Systems (BBS). In the 1990s, Internet forum software created running conversations with "threads". Threads are topical connections between messages on a virtual "corkboard". From June 14, 1993, Mosaic Communications Corporation maintained their "What's New"[15] list of new websites, updated daily and archived monthly. The page was accessible by a special "What's New" button in the Mosaic web browser.

The earliest instance of a commercial blog was on the first business to consumer Web site created in 1995 by Ty, Inc., which featured a blog in a section called "Online Diary". The entries were maintained by featured Beanie Babies that were voted for monthly by Web site visitors.[16]

The modern blog evolved from the online diary where people would keep a running account of the events in their personal lives. Most such writers called themselves diarists, journalists, or journalers. Justin Hall, who began personal blogging in 1994 while a student at Swarthmore College, is generally recognized as one of the earlier bloggers,[17] as is Jerry Pournelle.[18] Dave Winer's Scripting News is also credited with being one of the older and longer running weblogs.[19][20] The Australian Netguide magazine maintained the Daily Net News[21] on their web site from 1996. Daily Net News ran links and daily reviews of new websites, mostly in Australia.

Another early blog was Wearable Wireless Webcam, an online shared diary of a person's personal life combining text, digital video, and digital pictures transmitted live from a wearable computer and EyeTap device to a web site in 1994. This practice of semi-automated blogging with live video together with text was referred to as sousveillance, and such journals were also used as evidence in legal matters. Some early bloggers, such as The Misanthropic Bitch, who began in 1997, actually referred to their online presence as a zine, before the term blog entered common usage.

Technology
Early blogs were simply manually updated components of common Websites. In 1995, the "Online Diary" on the Ty, Inc. Web site was produced and updated manually before any blogging programs were available. Posts were made to appear in reverse chronological order by manually updating text based HTML code using FTP software in real time several times a day. To users, this offered the appearance of a live diary that contained multiple new entries per day. At the beginning of each new day, new diary entries were manually coded into a new HTML file, and the start of each month, diary entries were archived into its own folder which contained a separate HTML page for every day of the month. Then menus that contained links to the most recent diary entry were updated manually throughout the site. This text-based method of organizing thousands of files served as a springboard to define future blogging styles that were captured by blogging software developed years later.[16]

The evolution of electronic and software tools to facilitate the production and maintenance of Web articles posted in reverse chronological order made the publishing process feasible to a much larger and less technically-inclined population. Ultimately, this resulted in the distinct class of online publishing that produces blogs we recognize today. For instance, the use of some sort of browser-based software is now a typical aspect of "blogging". Blogs can be hosted by dedicated blog hosting services, on regular web hosting services, or run using blog software.

Rise in popularity
After a slow start, blogging rapidly gained in popularity. Blog usage spread during 1999 and the years following, being further popularized by the near-simultaneous arrival of the first hosted blog tools:

</p>
<p>An early milestone in the rise in importance of blogs came in 2002, when many bloggers focused on comments by U.S. Senate Majority Leader Trent Lott.[23] Senator Lott, at a party honoring U.S. Senator Strom Thurmond, praised Senator Thurmond by suggesting that the United States would have been better off had Thurmond been elected president. Lott's critics saw these comments as a tacit approval of racial segregation, a policy advocated by Thurmond's 1948 presidential campaign. This view was reinforced by documents and recorded interviews dug up by bloggers. (See Josh Marshall's Talking Points Memo.) Though Lott's comments were made at a public event attended by the media, no major media organizations reported on his controversial comments until after blogs broke the story. Blogging helped to create a political crisis that forced Lott to step down as majority leader.

Similarly, blogs were among the driving forces behind the "Rathergate" scandal. To wit: (television journalist) Dan Rather presented documents (on the CBS show 60 Minutes) that conflicted with accepted accounts of President Bush's military service record. Bloggers declared the documents to be forgeries and presented evidence and arguments in support of that view. Consequently, CBS apologized for what it said were inadequate reporting techniques (see Little Green Footballs). Many bloggers view this scandal as the advent of blogs' acceptance by the mass media, both as a news source and opinion and as means of applying political pressure.[original research?] The impact of these stories gave greater credibility to blogs as a medium of news dissemination. Though often seen as partisan gossips,[citation needed] bloggers sometimes lead the way in bringing key information to public light, with mainstream media having to follow their lead. More often, however, news blogs tend to react to material already published by the mainstream media. Meanwhile, an increasing number of experts blogged, making blogs a source of in-depth analysis.[original research?]

In Russia, some political bloggers have started to challenge the dominance of official, overwhelmingly pro-government media. Bloggers such as Rustem Adagamov and Alexei Navalny have many followers and the latter's nickname for the ruling United Russia party as the "party of crooks and thieves" has been adopted by anti-regime protesters.[24] This led to The Wall Street Journal calling Navalny "the man Vladimir Putin fears most" in March 2012.[25]

Mainstream popularity
By 2004, the role of blogs became increasingly mainstream, as political consultants, news services, and candidates began using them as tools for outreach and opinion forming. Blogging was established by politicians and political candidates to express opinions on war and other issues and cemented blogs' role as a news source. (See Howard Dean and Wesley Clark.) Even politicians not actively campaigning, such as the UK's Labour Party's Member of Parliament (MP) Tom Watson, began to blog to bond with constituents. In January 2005, Fortune magazine listed eight bloggers whom business people "could not ignore": Peter Rojas, Xeni Jardin, Ben Trott, Mena Trott, Jonathan Schwartz, Jason Goldman, Robert Scoble, and Jason Calacanis.[26]

Israel was among the first national governments to set up an official blog.[27] Under David Saranga, the Israeli Ministry of Foreign Affairs became active in adopting Web 2.0 initiatives, including an official video blog[27] and a political blog.[28] The Foreign Ministry also held a microblogging press conference via Twitter about its war with Hamas, with Saranga answering questions from the public in common text-messaging abbreviations during a live worldwide press conference.[29] The questions and answers were later posted on IsraelPolitik, the country's official political blog.[30]

The impact of blogging upon the mainstream media has also been acknowledged by governments. In 2009, the presence of the American journalism industry had declined to the point that several newspaper corporations were filing for bankruptcy, resulting in less direct competition between newspapers within the same circulation area. Discussion emerged as to whether the newspaper industry would benefit from a stimulus package by the federal government. U.S. President Barack Obama acknowledged the emerging influence of blogging upon society by saying "if the direction of the news is all blogosphere, all opinions, with no serious fact-checking, no serious attempts to put stories in context, then what you will end up getting is people shouting at each other across the void but not a lot of mutual understanding".[31] Between 2009 and 2012, an Orwell Prize for blogging was awarded.

Types

A screenshot from the BlogActive website.
There are many different types of blogs, differing not only in the type of content, but also in the way that content is delivered or written.

Personal blogs
The personal blog is an ongoing online diary or commentary written by an individual, rather than a corporation or organization. While the vast majority of personal blogs attract very few readers, other than the blogger's immediate family and friends, a small number of personal blogs have become popular, to the point that they have attracted lucrative advertising sponsorship. A tiny number of personal bloggers have become famous, both in the online community and in the real world.
Collaborative blogs or group blogs
A type of weblog in which posts are written and published by more than one author. The majority of high-profile collaborative blogs are organised according to a single uniting theme, such as politics, technology or advocacy. In recent years, the blogosphere has seen the emergence and growing popularity of more collaborative efforts, often set up by already established bloggers wishing to pool time and resources, both to reduce the pressure of maintaining a popular website and to attract a larger readership.
Microblogging
Microblogging is the practice of posting small pieces of digital content—which could be text, pictures, links, short videos, or other media—on the Internet. Microblogging offers a portable communication mode that feels organic and spontaneous to many users. It has captured the public imagination, in part because the short posts are easy to read on the go or when waiting. Friends use it to keep in touch, business associates use it to coordinate meetings or share useful resources, and celebrities and politicians (or their publicists) microblog about concert dates, lectures, book releases, or tour schedules. A wide and growing range of add-on tools enables sophisticated updates and interaction with other applications. The resulting profusion of functionality is helping to define new possibilities for this type of communication.[32] Examples of these include Twitter, Facebook, Tumblr and, by far the largest, WeiBo.</p>
<p>Blurring with the mass media
Many bloggers, particularly those engaged in participatory journalism, are amateur journalists, and thus they differentiate themselves from the professional reporters and editors who work in mainstream media organizations. Other bloggers are media professionals who are publishing online, rather than via a TV station or newspaper, either as an add-on to a traditional media presence (e.g., hosting a radio show or writing a column in a paper newspaper), or as their sole journalistic output. Some institutions and organizations see blogging as a means of "getting around the filter" of media "gatekeepers" and pushing their messages directly to the public. Many mainstream journalists, meanwhile, write their own blogs—well over 300, according to CyberJournalist.net's J-blog list.[citation needed] The first known use of a blog on a news site was in August 1998, when Jonathan Dube of The Charlotte Observer published one chronicling Hurricane Bonnie.[45]

Some bloggers have moved over to other media. The following bloggers (and others) have appeared on radio and television: Duncan Black (known widely by his pseudonym, Atrios), Glenn Reynolds (Instapundit), Markos Moulitsas Zúniga (Daily Kos), Alex Steffen (Worldchanging), Ana Marie Cox (Wonkette), Nate Silver (FiveThirtyEight.com), and Ezra Klein (Ezra Klein blog in The American Prospect, now in The Washington Post''). In counterpoint, Hugh Hewitt exemplifies a mass media personality who has moved in the other direction, adding to his reach in "old media" by being an influential blogger. Similarly, it was Emergency Preparedness and Safety Tips On Air and Online blog articles that captured Surgeon General of the United States Richard Carmona's attention and earned his kudos for the associated broadcasts by talk show host Lisa Tolliver and Westchester Emergency Volunteer Reserves-Medical Reserve Corps Director Marianne Partridge.[46][47]

Blogs have also had an influence on minority languages, bringing together scattered speakers and learners; this is particularly so with blogs in Gaelic languages. Minority language publishing (which may lack economic feasibility) can find its audience through inexpensive blogging. There are examples of bloggers who have published books based on their blogs, e.g., Salam Pax, Ellen Simonetti, Jessica Cutler, ScrappleFace. Blog-based books have been given the name blook. A prize for the best blog-based book was initiated in 2005,[48] the Lulu Blooker Prize.[49] However, success has been elusive offline, with many of these books not selling as well as their blogs. The book based on Julie Powell's blog "The Julie/Julia Project" was made into the film Julie & Julia, apparently the first to do so.

Consumer-generated advertising
Consumer-generated advertising is a relatively new and controversial development, and it has created a new model of marketing communication from businesses to consumers. Among the various forms of advertising on blog, the most controversial are the sponsored posts.[50] These are blog entries or posts and may be in the form of feedback, reviews, opinion, videos, etc. and usually contain a link back to the desired site using a keyword or several keywords. Blogs have led to some disintermediation and a breakdown of the traditional advertising model, where companies can skip over the advertising agencies (previously the only interface with the customer) and contact the customers directly via social media websites. On the other hand, new companies specialised in blog advertising have been established, to take advantage of this new development as well. However, there are many people who look negatively on this new development. Some believe that any form of commercial activity on blogs will destroy the blogosphere's credibility.[51]

Legal and social consequences
Blogging can result in a range of legal liabilities and other unforeseen consequences.[52]

Defamation or liability
Several cases have been brought before the national courts against bloggers concerning issues of defamation or liability. U.S. payouts related to blogging totaled $17.4 million by 2009; in some cases these have been covered by umbrella insurance.[53] The courts have returned with mixed verdicts. Internet Service Providers (ISPs), in general, are immune from liability for information that originates with third parties (U.S. Communications Decency Act and the EU Directive 2000/31/EC). In Doe v. Cahill, the Delaware Supreme Court held that stringent standards had to be met to unmask the anonymous bloggers, and also took the unusual step of dismissing the libel case itself (as unfounded under American libel law) rather than referring it back to the trial court for reconsideration.[54] In a bizarre twist, the Cahills were able to obtain the identity of John Doe, who turned out to be the person they suspected: the town's mayor, Councilman Cahill's political rival. The Cahills amended their original complaint, and the mayor settled the case rather than going to trial.

In January 2007, two prominent Malaysian political bloggers, Jeff Ooi and Ahirudin Attan, were sued by a pro-government newspaper, The New Straits Times Press (Malaysia) Berhad, Kalimullah bin Masheerul Hassan, Hishamuddin bin Aun and Brenden John a/l John Pereira over an alleged defamation. The plaintiff was supported by the Malaysian government.[55] Following the suit, the Malaysian government proposed to "register" all bloggers in Malaysia to better control parties against their interest.[56] This is the first such legal case against bloggers in the country. In the United States, blogger Aaron Wall was sued by Traffic Power for defamation and publication of trade secrets in 2005.[57] According to Wired magazine, Traffic Power had been "banned from Google for allegedly rigging search engine results."[58] Wall and other "white hat" search engine optimization consultants had exposed Traffic Power in what they claim was an effort to protect the public. The case was dismissed for lack of personal jurisdiction, and Traffic Power failed to appeal within the allowed time.[59]

In 2009, NDTV issued a legal notice to Indian blogger Kunte for a blog post criticizing their coverage of the Mumbai attacks.[60] The blogger unconditionally withdrew his post, which resulted in several Indian bloggers criticizing NDTV for trying to silence critics.[61]

Employment
Employees who blog about elements of their place of employment can begin to affect the reputation of their employer, either in a positive way, if the employee is praising the employer and its workplaces, or in a negative way, if the blogger is making negative comments about the company or its practices.

In general, attempts by employee bloggers to protect themselves by maintaining anonymity have proved ineffective.[62] In 2009, a controversial and landmark decision by The Hon. Mr Justice Eady refused to grant an order to protect the anonymity of Richard Horton. Horton was a police officer in the United Kingdom who blogged about his job under the name "NightJack".[63]

Delta Air Lines fired flight attendant Ellen Simonetti because she posted photographs of herself in uniform on an airplane and because of comments posted on her blog "Queen of Sky: Diary of a Flight Attendant" which the employer deemed inappropriate.[64][65] This case highlighted the issue of personal blogging and freedom of expression versus employer rights and responsibilities, and so it received wide media attention. Simonetti took legal action against the airline for "wrongful termination, defamation of character and lost future wages".[66] The suit was postponed while Delta was in bankruptcy proceedings.[67]

In early 2006, Erik Ringmar, a senior lecturer at the London School of Economics, was ordered by the convenor of his department to "take down and destroy" his blog in which he discussed the quality of education at the school.[68]

Mark Jen was terminated in 2005 after 10 days of employment as an assistant product manager at Google for discussing corporate secrets on his personal blog, then called 99zeros and hosted on the Google-owned Blogger service.[69] He blogged about unreleased products and company finances a week before the company's earnings announcement. He was fired two days after he complied with his employer's request to remove the</p>
    </div>
  );
}
