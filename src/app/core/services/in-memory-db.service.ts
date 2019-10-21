import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Video } from 'src/app/features/gallery/types/video.interface';
import { User } from '../../features/access-management/types/user.interface';

@Injectable()
export class InMemoryDBService implements InMemoryDbService {
  createDb(): {} {
    const users: User[] = [
      {
        id: 1,
        userName: 'nyhasinavalona',
        password: 'password',
      },
    ];
    const videos: Video[] = [
      {
        id: 1,
        title: 'Spider-man: Homecoming',
        poster: 'homecoming.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Following the Battle of New York,  Adrian Toomes and his salvage company are contracted to clean up the city, but their operation is taken over by the Department of Damage Control (D.O.D.C.), a partnership between Tony Stark and the U.S. government. Enraged at being driven out of business, Toomes persuades his employees to keep the Chitauri technology they have already scavenged and use it to create and sell advanced weapons. Eight years later, Peter Parker is drafted into the Avengers by Stark to help with an internal dispute in Berlin,  but resumes his studies at the Midtown School of Science and Technology when Stark tells him he is not yet ready to become a full Avenger.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 2,
        title: 'Spider-man: Far from home',
        poster: 'far-from-home.jpg',
        yearOfProduction: 2019,
        rated: 5,
        synopsis: `
          In Ixtenco, Mexico, Nick Fury and Maria Hill investigate an unnatural storm and encounter the Earth Elemental. Quentin Beck, a super-powered individual, arrives to fight the creature. In New York City, the Midtown School of Science and Technology completes its academic year which was restarted to accommodate the students who disappeared during the five-year period known as "the Blip". They had reappeared eight months earlier thanks to the actions of the Avengers. The school organizes a two-week summer field trip to Europe, where Peter Parker—still mourning the death of his mentor and father figure Tony Stark[N 1]—plans to confess his growing feelings for classmate MJ. Parker is warned by Happy Hogan that he will be contacted by Fury, but he chooses to ignore the call.
        `,
        views: 46548984,
        pined: false,
      },
      {
        id: 3,
        title: 'Avengers: Age of Ultron',
        poster: 'age-of-ultron.jpg',
        yearOfProduction: 2017,
        rated: 3,
        synopsis: `
          In the Eastern European country of Sokovia, the Avengers—Tony Stark, Steve Rogers, Thor, Bruce Banner, Natasha Romanoff, and Clint Barton—raid a Hydra facility commanded by Baron Wolfgang von Strucker, who has been experimenting on humans using the scepter previously wielded by Loki. They encounter two of Strucker's test subjects—twins Pietro, who has superhuman speed, and Wanda Maximoff, who has telepathic and telekinetic abilities—and apprehend Strucker, while Stark retrieves Loki's scepter.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 4,
        title: 'Annabelle: Creation',
        poster: 'annabelle-creation.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Dollmaker Samuel Mullins and his wife Esther grieve for the loss of their seven-year-old daughter Annabelle "Bee", who is killed when she accidentally steps in front of a car.
Twelve years later, the Mullins open their home to provide shelter for Sister Charlotte and six girls left homeless by the closing of their orphanage. Despite having been told not to enter Bee's locked bedroom, Janice, a young orphan disabled by polio, discovers a note saying "Find me" and sneaks into the room, which has mysteriously become unlocked. She finds a key for Bee's closet and opens it, where she sees an eerie porcelain doll. This unwittingly releases a powerful demon that begins to terrorize the girls.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 5,
        title: 'Annabelle',
        poster: 'annabelle.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
          In Santa Monica, California, John Form, a doctor, presents his expectant wife Mia with a rare vintage porcelain doll as a gift for their first child to be placed in a collection of dolls in their daughter's nursery.
          That night, the couple is disturbed by the sounds of their next door neighbors, the Higgins, being murdered during a home invasion. While Mia calls the police, she and John are attacked by the Higgins' killers. The police arrive and shoot one killer, a man, dead while the female killer commits suicide by slitting her throat inside the nursery while holding the porcelain doll. News reports identify the assailants as the Higgins' estranged daughter, Annabelle, and her unidentified boyfriend, both members of a cult.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 6,
        title: 'Black panther',
        poster: 'black-panther.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
          Thousands of years ago, five African tribes war over a meteorite containing the metal vibranium. One warrior ingests a "heart-shaped herb" affected by the metal and gains superhuman abilities, becoming the first "Black Panther". He unites all but the Jabari Tribe to form the nation of Wakanda. Over centuries, the Wakandans use the vibranium to develop advanced technology and isolate themselves from the world by posing as a Third World country. In 1992, Wakanda's King T'Chaka visits his brother N'Jobu, who is working undercover in Oakland, California. T'Chaka accuses N'Jobu of assisting black-market arms dealer Ulysses Klaue with stealing vibranium from Wakanda. N'Jobu's partner reveals he is Zuri, another undercover Wakandan, and confirms T'Chaka's suspicions.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 7,
        title: 'Captain Marvel',
        poster: 'captain-marvel.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
          In 1995, on the Kree Empire's capital planet of Hala, Starforce member Vers suffers from amnesia and recurring nightmares involving an older woman. Yon-Rogg, her mentor and commander, trains her to control her abilities while the Supreme Intelligence, the artificial intelligence that rules the Kree, urges her to keep her emotions in check.

During a mission to rescue an undercover operative infiltrating a group of Skrulls, alien shapeshifters with whom the Kree are at war, Vers is captured by Skrull commander Talos. A probe of Vers's memories leads them to Earth. Vers escapes and crash-lands in Los Angeles. Her presence attracts S.H.I.E.L.D. agents Nick Fury and Phil Coulson, whose investigation is interrupted by a Skrull attack. In the ensuing chase, Vers recovers a crystal containing her extracted memories while Fury kills a Skrull impersonating Coulson. Talos, disguised as Fury's boss Keller, orders Fury to work with Vers and keep tabs on her. 
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 8,
        title: 'Doctor Strange',
        poster: 'doctor-strange.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        In Kathmandu, the sorcerer Kaecilius and his zealots enter the secret compound Kamar-Taj and behead its librarian. They steal a few pages from an ancient, mystical text belonging to the Ancient One, a long-lived sorcerer who has taught every student at Kamar-Taj, including Kaecilius, in the mystic arts. The Ancient One pursues the traitors, but Kaecilius and his followers escape.

In New York City, Stephen Strange, a wealthy, acclaimed, and arrogant neurosurgeon, severely injures his hands in a car crash, leaving him unable to operate. Fellow surgeon Christine Palmer tries to help him move on, but Strange vainly pursues experimental surgeries to heal his hands, nearly bankrupting himself. Strange learns about Jonathan Pangborn, a paraplegic who mysteriously regained use of his legs. Pangborn directs Strange to Kamar-Taj, where he is taken in by Mordo, a sorcerer under the Ancient One. The Ancient One demonstrates her power to Strange, revealing the astral plane and other dimensions such as the Mirror Dimension. She reluctantly agrees to train Strange, whose arrogance and ambition remind her of Kaecilius.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 9,
        title: 'Dune',
        poster: 'dune.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
          In the far future of humanity, Duke Leto Atreides accepts stewardship of the dangerous desert planet Arrakis, the only source of the most valuable substance in the universe, "the spice", a drug which extends human life and provides accelerated levels of thought. Though Leto knows the opportunity is an intricate trap set by his enemies, the Harkonnens, he takes his Bene Gesserit concubine Lady Jessica, young son and heir Paul, and most trusted advisers to Arrakis, also known as Dune. Leto takes control of the spice mining operation, which is made perilous by the presence of giant sandworms. A bitter betrayal leads Paul and Jessica to the Fremen, natives of Arrakis who live in the deep desert. 
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 10,
        title: 'Avengers: End game',
        poster: 'end-game.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Twenty-three days after Thanos used the Infinity Gauntlet to disintegrate half of all life in the universe, Carol Danvers rescues Tony Stark and Nebula from deep space and returns them to Earth, where they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket. Locating Thanos on an otherwise uninhabited planet, they plan to retake and use the Infinity Stones to reverse "the Snap", but Thanos reveals he destroyed the Stones to prevent their further use. Enraged, Thor decapitates Thanos.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 11,
        title: 'Fall inn love',
        poster: 'fall-inn-love.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Carol Danvers rescues Tony Stark and Nebula from deep space and returns them to Earth, where they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket. Locating Thanos on an otherwise uninhabited planet, they plan to retake and use the Infinity Stones to reverse "the Snap", but Thanos reveals he destroyed the Stones to prevent their further use. Enraged, Thor decapitates Thanos.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 12,
        title: 'The fate of the furious',
        poster: 'fate-of-the-furious.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Dominic "Dom" Toretto and Letty Ortiz are on their honeymoon in Havana when Dom's cousin Fernando gets in trouble owing money to local racer Raldo. Sensing Raldo is a loan shark, Dom challenges Raldo to a race, pitting Fernando's reworked car against Raldo's, and wagering his own show car. After narrowly winning the race, Dom allows Raldo to keep his car, earning his respect, and instead leaves his cousin with his show car.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 13,
        title: 'Avengers: Infinity war',
        poster: 'infinity-war.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Having acquired the Power Stone, one of the six Infinity Stones, from the planet Xandar, Thanos and his lieutenants—Ebony Maw, Cull Obsidian, Proxima Midnight, and Corvus Glaive—intercept the spaceship carrying the survivors of Asgard's recent destruction.
        As they extract the Space Stone from the Tesseract, Thanos subdues Thor, overpowers Hulk, and kills Loki. Thanos also kills Heimdall after he sends Hulk to Earth using the Bifröst. Thanos and his lieutenants depart, destroying the ship in the process.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 14,
        title: 'Le roi lion',
        poster: 'roi-lion.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        In the Pride Lands of Africa, a pride of lions rule over the animal kingdom from Pride Rock. King Mufasa's and Queen Sarabi's newborn son, Simba, is presented to the gathering animals by Rafiki the mandrill, the kingdom's shaman and advisor. Mufasa shows Simba the Pride Lands and explains to him the responsibilities of kingship and the "circle of life", which connects all living things. Mufasa's younger brother, Scar, covets the throne and plots to eliminate Mufasa and Simba, so he may become king. He tricks Simba and his best friend Nala (to whom Simba is betrothed) into exploring a forbidden elephants' graveyard, where they are attacked by three spotted hyenas, Shenzi, Banzai, and Ed, who are in league with Scar. Mufasa is alerted about the incident by his majordomo, the hornbill Zazu, and rescues the cubs. Though upset with Simba, Mufasa forgives him and explains that the great kings of the past watch over them from the night sky, from which he will one day watch over Simba.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 15,
        title: 'Shazam',
        poster: 'shazam.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        In 1974 Upstate New York, young Thaddeus Sivana is arguing with his father and older brother, Sid, during a car trip when he is transported to the Rock of Eternity, a magical temple hidden in another dimension. He meets the ancient wizard Shazam, last of the Council of Wizards, who has spent centuries searching for a new champion who is "pure of heart" after the previous champion, driven by revenge, released the Seven Deadly Sins -Pride, Wrath, Greed, Gluttony, Sloth, Lust and Envy- upon the world and killed the other Wizards. Thaddeus is tempted by the Sins, entrapped in statues, to touch the Eye of Sin, and is deemed unworthy after being prevented to do so by Shazam. After returning to Earth, the confused Thaddeus makes a scene, which causes the car to crash and cripple his father with Sid blaming him. Back at the Rock of Eternity, Shazam requests for another worthy person by casting a Seeking Spell.
        `,
        views: this.randomViews(),
        pined: false,
      },
      {
        id: 16,
        title: 'Thor: Ragnarok',
        poster: 'thor-ragnarok.jpg',
        yearOfProduction: 2017,
        rated: this.randomRating(),
        synopsis: `
        Two years after the battle of Sokovia, Thor is imprisoned by the fire demon Surtur, who reveals that Thor's father Odin is no longer on Asgard. He explains that the realm will soon be destroyed during the prophesied Ragnarök, once Surtur unites his crown with the Eternal Flame that burns in Odin's vault. Thor frees himself, defeats Surtur and takes his crown, believing he has prevented Ragnarök.
        Thor returns to Asgard to find Heimdall gone and his brother Loki posing as Odin. After exposing Loki, Thor forces him to help find their father, and with directions from Stephen Strange on Earth, they locate Odin in Norway. Odin explains that he is dying and Ragnarök is imminent despite Thor's efforts to prevent it. He then reveals his passing will allow his firstborn child, Hela, to escape from a prison she was sealed in long ago. Hela was the leader of Asgard's armies, conquering the Nine Realms with Odin, but Odin imprisoned her and wrote her out of history after he feared that she had become too ambitious and powerful.
        `,
        views: this.randomViews(),
        pined: false,
      },
    ];
    return { users, videos };
  }

  randomViews(): number {
    return +(Math.random() * Math.pow(10, 6));
  }

  randomRating(): number {
    return Math.floor(Math.random() * 6);
  }
}
