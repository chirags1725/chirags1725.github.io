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
    </div>
  );
}
