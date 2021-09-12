import sputnikIllustration from "../../assets/illustrations/noun_Sputnik_190534.svg";
import laikaIllustration from "../../assets/illustrations/noun_dog astronaut_4119784.svg";
import gagarinIllustration from "../../assets/illustrations/noun_Astronaut_3437987.svg";
import tereshkovaIllustration from "../../assets/illustrations/noun_Astronaut_3437785.svg";
import salyutIllustration from "../../assets/illustrations/noun_space station_2677019.svg";
import buranIllustration from "../../assets/illustrations/noun_spaceshuttle_1675163.svg";
import Level from "../molecules/Level";

const Levels = () => {
  return (
    <div>
      <Level
        achievmentTitle="Sputnik 1"
        achievmentLink="https://en.wikipedia.org/wiki/Sputnik_1"
        illustrationPath={sputnikIllustration}
        letters={["О", "Е", "А", "И", "Н", "Т"]}
      />
      <Level
        achievmentTitle="Laika"
        achievmentLink="https://en.wikipedia.org/wiki/Laika"
        illustrationPath={laikaIllustration}
        letters={["С", "Л", "В", "Р", "К", "М"]}
      />
      <Level
        achievmentTitle="Yuri Gagarin"
        achievmentLink="https://en.wikipedia.org/wiki/Yuri_Gagarin"
        illustrationPath={gagarinIllustration}
        letters={["Д", "П", "Ы", "У", "Б", "Я"]}
      />
      <Level
        achievmentTitle="Valentina Tereshkova"
        achievmentLink="https://en.wikipedia.org/wiki/Valentina_Tereshkova"
        illustrationPath={tereshkovaIllustration}
        letters={["Ь", "Г", "З", "Ч", "Й", "Ж"]}
      />
      <Level
        achievmentTitle="Salyut 1"
        achievmentLink="https://en.wikipedia.org/wiki/Salyut_1"
        illustrationPath={salyutIllustration}
        letters={["Х", "Ш", "Ю", "Ц", "Э", "Щ"]}
      />
      <Level
        achievmentTitle="Buran"
        achievmentLink="https://en.wikipedia.org/wiki/Buran_(spacecraft)"
        illustrationPath={buranIllustration}
        letters={["Ф", "Ё", "Ъ"]}
      />
    </div>
  );
};

export default Levels;
