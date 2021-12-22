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
<p>Grammatical abbreviations are generally written in full or small caps to visually distinguish them from the translations of lexical words. For instance, capital or small-cap past (frequently abbreviated to pst) glosses a grammatical past-tense morpheme, while lower-case 'past' would be a literal translation of a word with that meaning. Similarly, (small) cap -down might be a locative suffix used in nominal inflections, prototypically indicating direction downward but possibly also used where it is not translatable as 'down' in English, whereas lower-case 'down' would be a direct English translation of a word meaning 'down'.[3] Not all authors follow this convention.
Person-number-gender is often further abbreviated, in which case the elements are not small caps. E.g. 3ms or 3msg for 3sg.m, 2fp or 2fpl for 2pl.f, also 1di for 1du.incl and 1pe for 1pl.excl.[4][nb 2]
Authors may more severely abbreviate glosses than is the norm, if they are particularly frequent within a text, e.g. ip rather than imm.pst for 'immediate past'. This helps keep the gloss graphically aligned with the parsed text when the abbreviations are longer than the morphemes they gloss. Such shortened forms may be ambiguous with other authors or texts are so are not presented as normative here. Glosses may also be less abbreviated than the norm if they are not common in a particular text, so as to not tax the reader, e.g. transtvzr for 'transitivizer' or subjunct for 'subjunctive'. At the extreme, glosses may not be abbreviated at all but simply written in small caps, e.g. complementizer, nontheme or downriver rather than comp, nth, dr.[5] Such long, obvious abbreviationse.g. in [6] have been omitted from the list below, but are always possible.
A morpheme will sometimes be used as its own gloss. This is typically done when it is the topic of discussion, and the author wishes it to be immediately recognized in the gloss among other morphemes with similar meanings, or when it has multiple or subtle meanings that would be impractical to gloss with a single conventional abbreviation. For example, if a passage has two contrasting nominalizing suffixes under discussion, ɣiŋ and jolqəl, they may be glossed gn and jq, with the glosses explained in the text.[7] This is also seen when the meaning of a morpheme is debated, and glossing it one way or another would prejudice the discussion.
Lexical morphemes are typically translated, using lower-case letters, though they may be given a grammatical gloss in small caps if they play a grammatical role in the text. Exceptions include proper nouns, which typically are not translated, and kinship terms, which may be too complex to translate. Proper nouns/names may simply be repeated in the gloss, or may be replaced with a placeholder such as "(name.f)" or "pn(f)" (for a female name). For kinship glosses, see the dedicated section below for a list of standard abbreviations.
Lehmann recommends that abbreviations for syntactic roles not be used as glosses for arguments, as they are not morphological categories. Glosses for case should be used instead, e.g. erg or nom for A.[8] Morphosyntactic abbreviations are typically typeset as full capitals even when small caps are used for glosses,[9] and include A (agent of transitive verb), B (core benefactive),[10] D or I (core dative / indirect object),[11] E (experiencer of sensory verb),[12] G or R (goal or recipient – indirect object of ditransitive verb),[13] L (location argument),[14] O or P (patient of transitive verb), S (single argument of intransitive verb), SA (Sa) and SP or SO (Sp, So) (agent- and patient-like argument in split-S alignment),[15] Se and Sx (argument of equative/copular and existential verb),[11] Su (subject of v.t. or v.i.),[11] and T (theme – direct object of ditransitive verb).[14]
These abbreviations are,</p>
<p>Glosses for generic concepts like 'particle', 'infix', 'tense', 'object marker' and the like are generally to be avoided in favor of specifying the precise value of the morpheme.[8] However, they may be appropriate for historical linguistics or language comparison, where the value differs between languages or a meaning cannot be reconstructed, or where such usage is unambiguous because there is only a single morpheme (e.g. article or aspect marker) that can be glossed that way. When a more precise gloss would be misleading (for example, an aspectual marker that has multiple uses, or which is not sufficiently understood to gloss properly), but glossing it as its syntactic category would be ambiguous, the author may disambiguate with digits (e.g. asp1 and asp2 for a pair of aspect markers). Such pseudo-glossing may be difficult for the reader to follow.
Authors also use placeholders for generic elements in schematicized parsing, such as may be used to illustrate morpheme or word order in a language. Examples include head or hd 'head'; root or rt 'root'; stem or st 'stem'; pref, prfx or px 'prefix'; suff, sufx or sx 'suffix'; clit, cl or encl '(en)clitic'; prep 'preposition' and pos or post 'postposition', png 'person–number–gender element' and tam 'tense–aspect–mood element' (also ng number–gender, pn person–number, ta tense–aspect, tame tense–aspect–mood–evidential) etc.[2][16] These are not listed below as they are not glosses for morphological values.
Lists
Nonabbreviated English words used as glosses are not included in the list below. Caution is needed with short glosses like at, by, to and up, which could potentially be either abbreviations or (as in these cases) nonabbreviated English prepositions used as glosses.

Transparent compounds of the glosses below, such as rempst or rem.pst 'remote past', a compound of rem 'remote' and pst 'past', are not listed separately.

Abbreviations beginning with n- (generalized glossing prefix for non-, in-, un-) are not listed separately unless they have alternative forms that are included. For example, npst non-past is not listed, as it is composable from n- non- + pst past. This convention is grounded in the Leipzig Glossing Rules.[2] Some authors use a lower-case n, for example nh for 'non-human'.[16]

Some sources are moving from classical lative (lat, -l) terminology to 'directional' (dir), with concommitant changes in the abbreviations. Other authors contrast -lative and -directive.[17]

Some sources use alternative abbreviations to distinguish e.g. nominalizer from nominalization,[18] or shorter abbreviations for compounded glosses in synthetic morphemes than for independent glosses in agglutinative morphemes.[19] These are seldom distinct morphosyntactic categories in a language, though some may be distinguished in historical linguistics. They are not distinguished below, as any such usage tends to be idiosyncratic to the author.

Punctuation and numbers
Conventional Gloss	Variants	Meaning	Reference
-		separator for segmentable morphemes, e.g., Lezgian amuq’-da-č (stay-fut-neg) "will not stay"	[2]
=	꞊, ‿	[optional in place of hyphen] separator for clitics, e.g., West Greenlandic palasi=lu niuirtur=lu (priest=and shopkeeper=and) "both the priest and the shopkeeper"	[2][20]
.		when a morph is rendered by more than one gloss, the glosses are separated by periods, e.g., French aux chevaux (to.art.pl horse.pl) "to the horses"
A period is not used between person and number, e.g. 1pl, 2sg, 1du, 3nsg (nonsingular).	[2]
_		[optional in place of period] when the language of the gloss lacks a one-word translation, a phrase may be joined by underscores, e.g., Turkish çık-mak (come_out-inf) "to come out"
With some authors, the reverse is also true, for a two-word phrase glossed with a single word.	[2][21]
›	>, →, :	[optional in place of period] direction of polypersonal agreement in a single gloss, whether
(a) possession (1s›sg means 1s possessor and singular possessum)
or (b) transitivity (2›3 means 2 acts on 3, as in guny-bi-yarluga (2du›3sg-fut-poke) "(who) do you two want to spear?"
A colon is used by some authors: 1s:sg, 2du:3sg-fut-poke.	[2][22][23][4]
:		[optional in place of period] separates glosses where segmentation is irrelevant (morphemes may be segmentable, but author does not wish to separate them)	[2]
;	:	[optional in place of period] separates glosses</p>

<p>urac	pluractional (= vpl verbal plural)	[54][48][80][37][32]
pm	predicate marker	[18]
pn, propn, pr cn	proper noun/name, personal name (e.g. pn.det proper-noun determiner)	[79][21]
PO		primary object	[8]
po	patient-orientated verb	[53]
podir	postdirective (= postlative)	[12]
poel	postel	postelative case	[12]
poess	poste, postess	postessive case ('after')	[12][50][56][17]
pol		polite register	[33]
pos	positive	[1]
poss	pos, po, psr	possessive, possessor (2poss 2nd-person possessive; poss.cl possessive classifier)	[2][14][20][1]
posb	possb, possib	possible, modal possibility	[58][76][55]
possd	possessed	[23]
post	po-	postlocative (behind). May be equivalent to postess or postl. Compounded for poste(ss) (poess), postl(at) (podir), postel (poel) etc. if a single morpheme, as post-ess, post-lat or post-dir, post-ela etc. if not.	[41][16][3][12]
post, postp	postposition, postpositional case	[58]
post	post-terminal aspect	[19]
postl	podir, postlat, postdir	postlative case, or 'postdirective'	[12][17]
pot	poten cn?	potential mood (cf. ver)	[33][8]
pp	(a) predicative possessive particle;
(b) present progressive;
(c) past perfect;
(d) pragmatic particle	[61][27][1][7]
ppa	active perfect participle	[18]
ppast	post-terminal past	[19]
ppf	perfect participle	[21]
ppfv	past perfective (= perfect)	[76]
ppp	(a) past passive participle;
(b) past perfect participle	[15][18]
pprt	pp, ppt, [cn] ppart, pastp [cn]	passive participle, past participle	[80][10][77]
pps	pseudo-passive	[47]
pr	pragmatic (in pr.part pragmatic particle)	[1]
prc	precedence	[47]
prec		precative mood (requests)	[8]
prec, precon	precondition (preca athematic precondition, prect thematic precondition)	[42][24]
prec, pre	precise, precision	[25][21]
pred		predicative affix, predicative	[2][12][23]
predict	prediction	[88]
prep		preposition, prepositional case	[33]
pret	prt	preterite (= pfv.pst)	[2][1]
prev	previous (in evidentials)	[19]
preven	preventative	[19]
prf	pft, pf, perf	perfect	[33][54][50][8][60][2]
prfrm, perform	performative	[38][78]
prior, pr	prior, preceding	[42][6]
priv	prv, prvt	privative case	[8][50][16]
pro	pn, prn, pron	pronominal base, (pro only) proform	[33][22][54][67]
prob	pb	probabilitive	[89][19]
procomp	procomplement	[19]
prod	product verbalizer	[19]
prog	prg, progr	progressive aspect	[2][67][99]
proh	prh, prohib	prohibitive mood ('don't!')	[2][33][47][19]
prol	prolat, prl	prolative case (= via)	[8][22][16]
prol	prolonged action	[114]
prop	propr	proprietive case (quality of having X)	[58][8][72][42][6]
prop	proper-noun marker	[6][81]
propos, prop	propositive mood (inclusive jussive)	[119][11]
pros	prosec	prosecutive case ('across', 'along')	[120][78]
prosp	pros, prsp cn?	prospective aspect or mood (ppros past prospective)	[8][94][56][7]
prot		protasis	[89]
prov	pro-verb	[10]
prox	px, prx	proximal demonstrative; proximate (e.g. prox.imp proximate imperative)	[2][31][19][99]
prp	property predication	[7]
prs	pres, pr	present tense	[2][60][1]
prsc	prescriptive	[61]
prsv	presentative	[36]
ps-	pseudo: psap pseudo-antipassive, pspass pseudo-passive	[28]
ps	passing state	[25]
ps	passé simple	[19]
ps	undergoer (patient-role subject)	[4]
psa	previous same agent of v.t. (pss previous same subject)	[67]
pss	previous event, same subject of v.i. (psa previous same agent); pssi and psst previous event, same subject of v.i. and v.t.	[67][19]
pssm, pssd	possessum (impersonal), possessed	[48][50]
pssr	possessor	[64]
pst	past, pa, ps, p, pas	past tense (e.g. pindef past indefinite, mpst modal past, spst simple past)	[2][53][1][19][32][7]
pstn	past nominalization	[24]
pst.pr	past/present (different readings on different word classes)	[31]
pt	potent case inflection	[23]
ptcl, prt, ptc, pt, ptl, pcl, part	particle
(Lehmann (2004) recommends avoiding this and instead translating/glossing the meaning.),[8]
particalizer	[58][33][77][12][13][47][41]
ptcp	{part, pcp, ppl, ptp, pple, prtc, ptcpl, partic, particip, p	participle, participial (mood)	[2][33][11][8][13][41][26][47][100][21][18][78]
pth	path	[21]
ptv	prtv, par, part, prt, ptt, partve	partitive case	[33][8][13][60][35][19]
punc	punct, pnc, pu, pncl, pct, pnct	punctual aspect, punctiliar	[6][58][8][14][38][25][35][36]
prp	purp, pur	purposive case/converb (nprp non-purposive)	[35][2][99]
pv	pf, pt, ov	patient/object voice/focus/trigger[is Starosta 'object focus' true focus, not voice?]	[81][7][83][82][71]
pv	pivot form/nominal	[53]
pv	possessive verbalizer	[21]
pvb	prev, prv, pv	preverb	[22][58]
pvp	post-verbal particle (only particle so glossed)	[95]
px	possessive suffix	[57]
q	qst, ques, quest, QP	question word or particle (= int)	[2][47][14][73]
qm	quantity marker	[26]
qu, qm, QM	question marker (usually = q)	[2][36][73]
qual		qualifier	[68][54]
quant	qnt	quantifier	[33][16][86]
quot	quo, qt	quotative (quotative case, quotative mood, quotation marker)	[2][117][1]
qv	quotative verb	[97]
r	rational gender (thinking beings) (r.sg or rs rational singular, r.pl or rp rational plural)	[citation needed]
-r		reflexive (e.g. 3r 3rd-person reflexive)	[47]
r-	relational (prefix on case abbreviation)	[24]
r.ext, rt.ext	root extension	[16][6]
r/a	realis/assertive	[23]
ra	repeated action	[19]
ra	relative agreement	[20]
rar		raritive	[56]
re	refactive	[16]
rea	reactive (responding)	[47]
real	rls, rl, r	realis mood	[8][48][80][54]
rec	rct, r	recent, recent past (rec.pst, rec.p recent past tense, r.prf recent perfect)	[8][19][35][7]
rec	receptive	[69]
recp	rcp, recip, recipr, rec	reciprocal voice	[2][42][36][60]
red, rdp, redup, rdpl, dup[citation needed]	reduplication, reduplicant (avoid if possible; instead gloss with meaning of reduplicated element)	[58][22][23][80]
ref	rfr	referential, referentive	[40][73][20][50]
refl	rfl, rflx, reflx, ref, rflex, rx, r	reflexive (reflexive pronoun/possessive, reflexive voice; 'r' used with person-number-gender)	[2][65][64][89][53][31][4][55][47]
reg		regal (e.g. pronouns)	[37]
reg	regularity	[47]
regr	reg	regressive	[1][37]
rel	r	(a) relative clause marker (relz relativizer);
(b) relative pronoun affix;
(c) relational (rel.cl relational classifier)
(d) relative case (possessor + A role)
(e) e.g. past.rel relative past	[2][15][26][45][1][19][4][35]
rel.fut	relative future	[88]
relev	relevance	[88]
rem	rm, rmt	remote: rem.pst or rem.p or remp remote past tense, rem.fut or rem.f or remf remote future tense; also rem remote past tense	[58][8][21][40][18][1][35]
rep	repet, rpt	(a) repetitive aspect (cf iter)
(b) repetitive numeral
(c) repeated word in repetition	[8][33][16][17][1][86]
res	resu, result	resultative (res.n resultative noun)	[2][117][78][17]
res	resignative	[21]
resid	residue class	[91]
return	returnative	[6]
rev	revisionary	[1]
rf	referential-focus	[71]
rln	relational	[20]
rsm, res[citation needed]	resumptive marker, resumptive pronoun	[54]
resp		respect	[58]
resp	responsive	[88]
ret	retro	retrospective (recollection; synonym for 'perfect' in some traditions) (pretro past retrospective)	[94][7]
rev		reversative, reversive	[25][100][6]
rev	reverential	[21]
r/m	reflexive/middle voice	[37]
rm	relative marker	[78]
rnr	result nominalizer	[19]
root	r, $	(empty tag to mark second element of a divided root)	[2][16][28]
roy		royal (e.g. pronouns)	[37]
rp	(a) recent past, = rec.pst
(b) remote past, = rem.pst	[38][27]
rp	reflexive-possessive	[21]
rpc	remote past continuous	[53]
rpi	remote past inferred	[50]
rpr	remote past reported	[50]
rpst	remote past	[91]
rpt	rprt, rep, rpr, revid	reported evidential (= hsy); reportative	[32][8][33][88][67][19][50][47][21][7]
rpv	remote past visual	[50]
rq	rhet, rqt	rhetorical question	[16][25][81][47]
rr, r	reflexive/reciprocal	[76][67]
rsn	reason	[64]
rst	rest, res, rstr	restrictive (restrictive numeral, adverbial)	[69][115][10][7][34]
rt	roundtrip	[6]
rv[citation needed]	rf	reason voice/focus/trigger	[7]
-s	subjective (abls subjective ablative, evits subjective evitative), 3fs 3f subject	[42][37]
sa	speaker authority (cf. aa)	[21]
saa	speaker-addressee authority	[21]
sal	salient	[25]
sap		speech-act participant (cf. msap	[28]
sbel	subel	subelative case ('from under')	[12]
sben	self-benefactive	[62]
sbess	sube cn?, subess	subessive case ('under')</p>
<p>smbl	sembl	semblative	[23][65][42]
smi	semeliterative	[1]
smr	same reference	[1]
so	same object	[1]
soc		(a) sociative case (socialis); (b) sociative causative	[55][78][115]
sp	spc, spec, spcf, specfc	specific, specifying (nsp, nspc, nspec nonspecific: cf. also nsp entry)	[8][86][38][61][71][28]
sp	sentence particle (= fp). See usage note at particle and fp.	[89][86]
sp	simple past,[citation needed] perfective past	[80]
sp	subject prefix	[6]
sp	speaker: sp.prox speaker-proximate, dem.sp demontrative near speaker	[23][16]
spat	spatial	[92]
specfr	spec	specifier	[33][38]
specl	spec	speculative mood	[19][33]
spkr		speaker-anchored, speaker perspective	[62][21]
spl	spotlighting	[47]
sr	(a) same referent, (b) switch reference	[23][69]
src, so	source	[50][55]
srp	self-reporting pronoun	[97]
ss	sa	same-subject/actor/argument marker (cf se)	[58][8][40][25]
sso	same-subject overlap ('while')	[31]
sss	same-subject succession ('then')	[31]
sss	simultaneous event, same subject (sssi of intransitive clause, ssst of transitive clause)	[19]
stat	stv, st, sta, stt	stative aspect, stative verb	[8][15][81][47]
stem	st, $	(empty tag to mark second element of a divided stem)	[2][79][28]
stim	stimulative	[38]
str	strong	[1]
sub		sublocative (under). May be equivalent to subess or subl. Compounded for sube(ss) (sbess), subl(at) (sbdir), subel (sbel) etc. if a single morpheme, as sub-ess, sub-lat or sub-dir, sub-ela etc. if not.	[41][16][3][12]
subl	sbdir, sublat, subdir	sublative case ('down under'), also 'subdirective'	[77][12][17]
subr	sub, subord, sbrd, sr	subordinator ('that'), subordinate	[33][19][58][20][8][64][50]
subs	subsequent	[6][95]
subsec	subsecutive mood	[78]
subst	substitutive	[16]
subz,[citation needed] sbst	substantivizer (= nominalizer)	[56][26]
suc	successive ('then')	[7]
sug	suggestive mood	[78]
sup		supine	[33]
sup	[dbl check next]	superlative (most: cf. super-lative, super-essive)	[8]
sup, supl cn?, suppl	supplicative, supplication	[33][6]
supel	srel, superel	superelative case ('from on top of', 'from above')	[56][12]
super	sup-, spr	superlocative. May be equivalent to superess or superl. Compounded for supere(ss) (supess), superl(at) (supdir), superel (supel), superabl etc. if a single morpheme, as super-ess, super-lat or super-dir, super-ela etc. if not.	[41][16][3][12][74]
supess	sup, supe cn?, sress, spress, super, superess cn?	superessive case ('above'; 'on')	[8][33][30][12][16][28]
supl	suplat, supdir, srdir, spr	super-lative, superdirective ('to above')	[8][33][12][77][60][17]
supp	psup, presupp	(pre)suppositive, presumptive, suppositional, presupposition	[19][21][78][24]
surp	surprise	[81]
svc	serial verb construction	[114]
sw	switch	[69]
sym	symmetric	[21]
-t		trigger (used for at, pt, gt etc.) [old fashioned; 'voice' is now standard]	[82]
-t	thematic (tamt thematic tense-aspect-mood, antt thematic antecedent, etc.)	[42]
t, tmp	temporal	[19][6]
ta	t/a	tense/aspect	[15][65][56]
tag		tag question	[16][7]
tam	tma	tense–aspect–mood	[15][79][86]
tel		(a) telic aspect (cf pfv) (a:tel anticipatory telic, c:tel culminatory telic)
(b) contrastive emphasis	[123][54][23][1]
temp	tem	temporal case; temporal converb	[33][77][98]
temp	temporarily	[6]
tens	number of tens (in a numeral)
tent		tentative	[56][50]
ter	term, termin	terminative ~ terminalis ('up to') (case, aspect)	[33][77][78]
term	non-subject	[19]
th, thm, them, themat	thematic element (e.g. thematic consonant, suffix); theme	[15][42][16][98][114][24][36]
tj	trajector	[53]
tkn		teknonym	[47]
tm-	tense marker: tmhrs, tmdays, tmyrs for events hours, days, years ago	[37]
tnd	tendency	[47]
tns	t, tens, ts	tense
Lehmann (2004) recommends avoiding this and specifying the tense.[8]	[33][65][23][19]
top	tp, tpc	topic marker (topp topical patientive)	[2][40][22][54]
topz, topr	topicalizer	[60]
tot		totalitative, totality	[15][25]
tr	trans, trns	transitive verb (trz, trr transitivizer); transitive case (rare)	[2][60][50]
tr	transitional sound	[54]
tr	trajector	[36]
transf, trnsf	transformative ('becoming', dynamic equiv. of essive)	[22][8]
transp	(transposition of deictic zero away from ego, e.g. 'uphill' from an object rather than from the speaker)	[124]
transl	tra, tral, trans, trnsl, translv cn?, translat, trltranslative, tsltranslocative	(a) translative case (becoming, into);
(b) translocative (across; may be compounded for e.g. ant-trans pass in front of, post-trans pass behind, sub-trans pass under)	[8][33][64][77][16][3][30][6]
tri	trl, tr	trial number	[35][8][4]
trip	retriplication [note: usually best to gloss with the meaning and ⟨~⟩]	[125]
trm	transmutative	[64]
trn		transnumeral (neither sg nor pl)	[54][18]
trposs	transfer of possession	[22]
trz	tz	transitivizer	[80][18]
ts	(a) thematic suffix; (b) tense	[16][19]
tv	thematic vowel	[80][32]
tvf		truth-value focus	[73]
u	uninflected (aux.u uninflected auxiliary)	[89]
ua	unit augmented	[23]
uc	upcoast	[citation needed]
uf	uncertain future	[97]
ugr, ug, und, u cn?	undergoer role (cf pat)	[8][40][65][2][99][69]
uh	uphill, inland (= afw. cf ur.)	[citation needed]
ul	upper level (spatial deixis)	[91]
uncert	uncertain mood	[78]
unif	unified	[4]
unsp	unspec	unspecified (person, tense)	[15][8][54][23]
unw	'unwillingness' marker	[79]
up	upward	[7]
ur		upriver (cf uh away from the water)	[73]
usit	usitative, for usual, customary or typical events	[65][53]
util		utilitive	[42]
uv	uf	undergoer voice/focus/trigger (= { pv + lv + cv })	[81][126]
uv	uncertain visual	[21]
uwpst	unwitnessed past	[98]
v	viewer	[36]
-v		trigger (used for av, pv, lv, cv etc.)	[citation needed]
va	verbal adjective	[19]
val		valency-increasing; valence marker	[15][28]
val	validator	[78][32]
vb	V	verbal (as a gloss in vbz, vz verbalizer, vpl verbal plural = plur, vcl verb class, vd verbal dative, vall verbal allative, etc.)	[33][8][72][115][24]
vbz	vblz, vblzr, verb, verbl, vbzr, vlz, vr, vz	verbalizer	[1][118][6][63][8][80][60][7][50][32]
vcl	verb class marker / classifier	[23]
vco	voluntary comitative</p>
    </div>
  );
}
