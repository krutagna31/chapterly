import { Volume } from "@/types";

export const SearchResponse: {
  kind: string;
  totalItems: number;
  items: Volume[];
} = {
  kind: "books#volumes",
  totalItems: 1000000,
  items: [
    {
      kind: "books#volume",
      id: "hXNvadj27ekC",
      etag: "hVOS82qJEWE",
      selfLink: "https://www.googleapis.com/books/v1/volumes/hXNvadj27ekC",
      volumeInfo: {
        title: "A Game of Thrones (HBO Tie-in Edition)",
        authors: ["George R. R. Martin"],
        publisher: "Bantam",
        publishedDate: "2011-03-22",
        description:
          "NOW THE ACCLAIMED HBO SERIES GAME OF THRONES—THE MASTERPIECE THAT BECAME A CULTURAL PHENOMENON Here is the first book in the landmark series that has redefined imaginative fiction and become a modern masterpiece. A GAME OF THRONES In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the North of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones. A GAME OF THRONES • A CLASH OF KINGS • A STORM OF SWORDS • A FEAST FOR CROWS • A DANCE WITH DRAGONS",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780553386790",
          },
          {
            type: "ISBN_10",
            identifier: "0553386794",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 722,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 4,
        ratingsCount: 7,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.8.0.0.preview.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=hXNvadj27ekC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=hXNvadj27ekC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=hXNvadj27ekC&dq=a+song+of+ice+and+fire&hl=&cd=1&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=hXNvadj27ekC&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Game_of_Thrones_HBO_Tie_in_Edition.html?hl=&id=hXNvadj27ekC",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=hXNvadj27ekC&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "NOW THE ACCLAIMED HBO SERIES GAME OF THRONES—THE MASTERPIECE THAT BECAME A CULTURAL PHENOMENON Here is the first book in the landmark series that has redefined imaginative fiction and become a modern masterpiece.",
      },
    },
    {
      kind: "books#volume",
      id: "mA8A4BYWB1IC",
      etag: "JYPb7aeMnG8",
      selfLink: "https://www.googleapis.com/books/v1/volumes/mA8A4BYWB1IC",
      volumeInfo: {
        title: "A Game of Thrones 4-Book Bundle",
        subtitle:
          "A Song of Ice and Fire Series: A Game of Thrones, A Clash of Kings, A Storm of Swords, and A Feast for Crows",
        authors: ["George R. R. Martin"],
        publisher: "Bantam",
        publishedDate: "2011-03-22",
        description:
          "The perfect gift for fans of HBO's Game of Thrones—a boxed set featuring the first four novels! George R. R. Martin's A Song of Ice and Fire series has become, in many ways, the gold standard for modern epic fantasy. Martin—dubbed the \"American Tolkien\" by Time magazine—has created a world that is as rich and vital as any piece of historical fiction, set in an age of knights and chivalry and filled with a plethora of fascinating, multidimensional characters that you love, hate to love, or love to hate as they struggle for control of a divided kingdom. This bundle includes the following novels: A GAME OF THRONES A CLASH OF KINGS A STORM OF SWORDS A FEAST FOR CROWS",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780345529060",
          },
          {
            type: "ISBN_10",
            identifier: "0345529065",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 3441,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 4,
        ratingsCount: 300,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "5.27.17.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=mA8A4BYWB1IC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=mA8A4BYWB1IC&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=mA8A4BYWB1IC&dq=a+song+of+ice+and+fire&hl=&cd=2&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=mA8A4BYWB1IC&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Game_of_Thrones_4_Book_Bundle.html?hl=&id=mA8A4BYWB1IC",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
        },
        pdf: {
          isAvailable: true,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=mA8A4BYWB1IC&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "The perfect gift for fans of HBO&#39;s Game of Thrones—a boxed set featuring the first four novels! George R. R. Martin&#39;s A Song of Ice and Fire series has become, in many ways, the gold standard for modern epic fantasy.",
      },
    },
    {
      kind: "books#volume",
      id: "hapdAAAAQBAJ",
      etag: "5GWfwSjJ8hc",
      selfLink: "https://www.googleapis.com/books/v1/volumes/hapdAAAAQBAJ",
      volumeInfo: {
        title: "The World of Ice & Fire",
        subtitle: "The Untold History of Westeros and the Game of Thrones",
        authors: [
          "George R. R. Martin",
          "Elio M. García Jr.",
          "Linda Antonsson",
        ],
        publisher: "Random House Worlds",
        publishedDate: "2014-10-28",
        description:
          "NEW YORK TIMES BESTSELLER • Perfect for fans of A Song of Ice and Fire and HBO’s Game of Thrones—an epic history of Westeros and the lands beyond, featuring hundreds of pages of all-new material from George R. R. Martin! If the past is prologue, then George R. R. Martin’s masterwork—the most inventive and entertaining fantasy saga of our time—warrants one hell of an introduction. At long last, it has arrived with The World of Ice & Fire. This lavishly illustrated volume is a comprehensive history of the Seven Kingdoms, providing vividly constructed accounts of the epic battles, bitter rivalries, and daring rebellions that lead to the events of A Song of Ice and Fire and HBO’s Game of Thrones. In a collaboration that’s been years in the making, Martin has teamed with Elio M. García, Jr., and Linda Antonsson, the founders of the renowned fan site Westeros.org—perhaps the only people who know this world almost as well as its visionary creator. Collected here is all the accumulated knowledge, scholarly speculation, and inherited folk tales of maesters and septons, maegi and singers, including • artwork and maps, with more than 170 original pieces • full family trees for Houses Stark, Lannister, and Targaryen • in-depth explorations of the history and culture of Westeros • 100% all-new material, more than half of which Martin wrote specifically for this book The definitive companion piece to George R. R. Martin’s dazzlingly conceived universe, The World of Ice & Fire is indeed proof that the pen is mightier than a storm of swords.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780345535559",
          },
          {
            type: "ISBN_10",
            identifier: "0345535553",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 338,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 5,
        ratingsCount: 1,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "3.25.21.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=hapdAAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=hapdAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=hapdAAAAQBAJ&printsec=frontcover&dq=a+song+of+ice+and+fire&hl=&cd=3&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=hapdAAAAQBAJ&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/The_World_of_Ice_Fire.html?hl=&id=hapdAAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/The_World_of_Ice_Fire-sample-epub.acsm?id=hapdAAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=hapdAAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "Collected here is all the accumulated knowledge, scholarly speculation, and inherited folk tales of maesters and septons, maegi and singers, including • artwork and maps, with more than 170 original pieces • full family trees for Houses ...",
      },
    },
    {
      kind: "books#volume",
      id: "OndVXwAACAAJ",
      etag: "Lz7Lv1iXpv4",
      selfLink: "https://www.googleapis.com/books/v1/volumes/OndVXwAACAAJ",
      volumeInfo: {
        title: "A Song of Ice and Fire Boxed Set",
        subtitle:
          "A Game of Thrones; A Clash of Kings; A Storm of Swords; A Feast for Crows",
        authors: ["George R. R. Martin", "Martin", "George R R"],
        publishedDate: "2011-09-27",
        description:
          "George R.R. Martin's A SONG OF ICE AND FIRE -- the story so far. The greatest epic work of the modern age is now available in a collectible box set. Now a major Sky Atlantic TV series from HBO, featuring a stellar cast.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0007450664",
          },
          {
            type: "ISBN_13",
            identifier: "9780007450664",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        printType: "BOOK",
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=OndVXwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=OndVXwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=OndVXwAACAAJ&dq=a+song+of+ice+and+fire&hl=&cd=4&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=OndVXwAACAAJ&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Song_of_Ice_and_Fire_Boxed_Set.html?hl=&id=OndVXwAACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=OndVXwAACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "George R.R. Martin&#39;s A SONG OF ICE AND FIRE -- the story so far. The greatest epic work of the modern age is now available in a collectible box set. Now a major Sky Atlantic TV series from HBO, featuring a stellar cast.",
      },
    },
    {
      kind: "books#volume",
      id: "t1RrxL_sI70C",
      etag: "2LqKPyub6PY",
      selfLink: "https://www.googleapis.com/books/v1/volumes/t1RrxL_sI70C",
      volumeInfo: {
        title:
          "A Storm of Swords: Part 1 Steel and Snow (A Song of Ice and Fire, Book 3)",
        authors: ["George R.R. Martin"],
        publisher: "HarperCollins UK",
        publishedDate: "2011-06-02",
        description:
          "HBO’s hit series A GAME OF THRONES is based on George R R Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A STORM OF SWORDS: STEEL AND SNOW is the FIRST part of the third volume in the series.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780007447756",
          },
          {
            type: "ISBN_10",
            identifier: "0007447752",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 634,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 3,
        ratingsCount: 14,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "7.21.19.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=t1RrxL_sI70C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=t1RrxL_sI70C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=t1RrxL_sI70C&printsec=frontcover&dq=a+song+of+ice+and+fire&hl=&cd=5&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=t1RrxL_sI70C&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=t1RrxL_sI70C",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 707.01,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 353.5,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=t1RrxL_sI70C&rdid=book-t1RrxL_sI70C&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 707010000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 353500000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/A_Storm_of_Swords_Part_1_Steel_and_Snow-sample-epub.acsm?id=t1RrxL_sI70C&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=t1RrxL_sI70C&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "A STORM OF SWORDS: STEEL AND SNOW is the FIRST part of the third volume in the series.",
      },
    },
    {
      kind: "books#volume",
      id: "1BTIswEACAAJ",
      etag: "Cl08nTDTlSI",
      selfLink: "https://www.googleapis.com/books/v1/volumes/1BTIswEACAAJ",
      volumeInfo: {
        title: "A Dance with Dragons",
        authors: ["George R. R. Martin"],
        publisher: "Voyager",
        publishedDate: "2012-03-15",
        description:
          "New threats emerge to endanger the future of the Seven Kingdoms, as Daenerys Targaryen, ruling in the East, fights off a multitude of enemies, while Jon Snow, Lord Commander of the Night's Watch, faces his foes both in the Watch and beyond the great wall of ice and stone.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0007456379",
          },
          {
            type: "ISBN_13",
            identifier: "9780007456376",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        categories: ["Dragons"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=1BTIswEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=1BTIswEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=1BTIswEACAAJ&dq=a+song+of+ice+and+fire&hl=&cd=6&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=1BTIswEACAAJ&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Dance_with_Dragons.html?hl=&id=1BTIswEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=1BTIswEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "HBO&#39;s hit series A GAME OF THRONES is based on George R R Martin&#39;s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A DANCE WITH DRAGONS is the fifth volume in the series.",
      },
    },
    {
      kind: "books#volume",
      id: "JAk7EAAAQBAJ",
      etag: "HzJVIlAFWng",
      selfLink: "https://www.googleapis.com/books/v1/volumes/JAk7EAAAQBAJ",
      volumeInfo: {
        title: "Medievalism in A Song of Ice and Fire and Game of Thrones",
        authors: ["Shiloh Carroll"],
        publisher: "Boydell & Brewer",
        publishedDate: "2018",
        description:
          "Game of Thrones is famously inspired by the Middle Ages - but how \"authentic\" is the world it presents? This volume offers different angles to the question. One of the biggest attractions of George R.R. Martin's high fantasy series A Song of Ice and Fire, and by extension its HBO television adaptation, Game of Thrones, is its claim to historical realism. The author, thedirectors and producers of the adaptation, and indeed the fans of the books and show, all lay claim to Westeros, its setting, as representative of an authentic medieval world. But how true are these claims? Is it possible to faithfully represent a time so far removed from our own in time and culture? And what does an authentic medieval fantasy world look like? This book explores Martin's and HBO's approaches to and beliefs about the Middle Ages and how those beliefs fall into traditional medievalist and fantastic literary patterns. Examining both books and programme from a range of critical approaches - medievalism theory, gender theory, queer theory, postcolonial theory, andrace theory - Dr Carroll analyzes how the drive for historical realism affects the books' and show's treatment of men, women, people of colour, sexuality, and imperialism, as well as how the author and showrunners discuss these effects outside the texts themselves. SHILOH CARROLL teaches in the writing center at Tennessee State University.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9781843844846",
          },
          {
            type: "ISBN_10",
            identifier: "1843844842",
          },
        ],
        readingModes: {
          text: false,
          image: true,
        },
        pageCount: 216,
        printType: "BOOK",
        categories: ["Literary Criticism"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "0.1.2.0.preview.1",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=JAk7EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=JAk7EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=JAk7EAAAQBAJ&pg=PA39&dq=a+song+of+ice+and+fire&hl=&cd=7&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=JAk7EAAAQBAJ&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/Medievalism_in_A_Song_of_Ice_and_Fire_an.html?hl=&id=JAk7EAAAQBAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: true,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/Medievalism_in_A_Song_of_Ice_and_Fire_an-sample-pdf.acsm?id=JAk7EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=JAk7EAAAQBAJ&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "... Ice and Fire Series , ” in George R.R. Martin&#39;s “ <b>A Song of Ice and Fire</b> ” and the Medieval Literary Tradition , edited by Bartołomiej Błaszkiewicz ( Warsaw : University Press of Warsaw , 2014 ) , 87 . 47 Ibid . , 90 . who &quot; went&nbsp;...",
      },
    },
    {
      kind: "books#volume",
      id: "8CpIngEACAAJ",
      etag: "G0irhQa0KKc",
      selfLink: "https://www.googleapis.com/books/v1/volumes/8CpIngEACAAJ",
      volumeInfo: {
        title: "A Storm of Swords: Part 1 Steel and Snow",
        authors: ["George R. R. Martin"],
        publisher: "Voyager",
        publishedDate: "2014-03-27",
        description:
          "The Seven Kingdoms are divided by revolt and blood feud. In the northern wastes a savage horde is poised to invade the Kingdom of the North where Robb Stark wears his new-forged crown. Throughout Westeros, the war for the Iron Throne rages more fiercely than ever, but if the Wall is breached, no king will live to claim it.",
        industryIdentifiers: [
          {
            type: "ISBN_10",
            identifier: "0007548257",
          },
          {
            type: "ISBN_13",
            identifier: "9780007548255",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 0,
        printType: "BOOK",
        categories: ["Fiction"],
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "preview-1.0.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=8CpIngEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=8CpIngEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=8CpIngEACAAJ&dq=a+song+of+ice+and+fire&hl=&cd=8&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=8CpIngEACAAJ&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Storm_of_Swords_Part_1_Steel_and_Snow.html?hl=&id=8CpIngEACAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=8CpIngEACAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet: "The Seven Kingdoms are divided by revolt and blood feud.",
      },
    },
    {
      kind: "books#volume",
      id: "6mhvBtafn3EC",
      etag: "8PNqjbvgq4o",
      selfLink: "https://www.googleapis.com/books/v1/volumes/6mhvBtafn3EC",
      volumeInfo: {
        title: "A Feast for Crows (A Song of Ice and Fire, Book 4)",
        authors: ["George R.R. Martin"],
        publisher: "HarperCollins UK",
        publishedDate: "2011-02-24",
        description:
          "HBO’s hit series A GAME OF THRONES is based on George R. R. Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A FEAST FOR CROWS is the fourth volume in the series.",
        industryIdentifiers: [
          {
            type: "ISBN_13",
            identifier: "9780007369218",
          },
          {
            type: "ISBN_10",
            identifier: "0007369212",
          },
        ],
        readingModes: {
          text: true,
          image: false,
        },
        pageCount: 854,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 3.5,
        ratingsCount: 26,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: true,
        contentVersion: "5.23.23.0.preview.2",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=6mhvBtafn3EC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=6mhvBtafn3EC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=6mhvBtafn3EC&printsec=frontcover&dq=a+song+of+ice+and+fire&hl=&cd=9&source=gbs_api",
        infoLink:
          "https://play.google.com/store/books/details?id=6mhvBtafn3EC&source=gbs_api",
        canonicalVolumeLink:
          "https://play.google.com/store/books/details?id=6mhvBtafn3EC",
      },
      saleInfo: {
        country: "IN",
        saleability: "FOR_SALE",
        isEbook: true,
        listPrice: {
          amount: 406.29,
          currencyCode: "INR",
        },
        retailPrice: {
          amount: 284.4,
          currencyCode: "INR",
        },
        buyLink:
          "https://play.google.com/store/books/details?id=6mhvBtafn3EC&rdid=book-6mhvBtafn3EC&rdot=1&source=gbs_api",
        offers: [
          {
            finskyOfferType: 1,
            listPrice: {
              amountInMicros: 406290000,
              currencyCode: "INR",
            },
            retailPrice: {
              amountInMicros: 284400000,
              currencyCode: "INR",
            },
          },
        ],
      },
      accessInfo: {
        country: "IN",
        viewability: "PARTIAL",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: true,
          acsTokenLink:
            "http://books.google.co.in/books/download/A_Feast_for_Crows_A_Song_of_Ice_and_Fire-sample-epub.acsm?id=6mhvBtafn3EC&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api",
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=6mhvBtafn3EC&hl=&source=gbs_api",
        accessViewStatus: "SAMPLE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "HBO’s hit series A GAME OF THRONES is based on George R. R. Martin’s internationally bestselling series A SONG OF ICE AND FIRE, the greatest fantasy epic of the modern age. A FEAST FOR CROWS is the fourth volume in the series.",
      },
    },
    {
      kind: "books#volume",
      id: "YxpbAAAAMAAJ",
      etag: "0rR+4oHJepU",
      selfLink: "https://www.googleapis.com/books/v1/volumes/YxpbAAAAMAAJ",
      volumeInfo: {
        title: "A Storm of Swords",
        authors: ["George R. R. Martin"],
        publisher: "Bantam",
        publishedDate: "2000-10-31",
        description: "Fantasy-roman.",
        industryIdentifiers: [
          {
            type: "OTHER",
            identifier: "UOM:39015054095784",
          },
        ],
        readingModes: {
          text: false,
          image: false,
        },
        pageCount: 1000,
        printType: "BOOK",
        categories: ["Fiction"],
        averageRating: 4.5,
        ratingsCount: 87,
        maturityRating: "NOT_MATURE",
        allowAnonLogging: false,
        contentVersion: "2.9.2.0.preview.0",
        panelizationSummary: {
          containsEpubBubbles: false,
          containsImageBubbles: false,
        },
        imageLinks: {
          smallThumbnail:
            "http://books.google.com/books/content?id=YxpbAAAAMAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          thumbnail:
            "http://books.google.com/books/content?id=YxpbAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
        },
        language: "en",
        previewLink:
          "http://books.google.co.in/books?id=YxpbAAAAMAAJ&q=a+song+of+ice+and+fire&dq=a+song+of+ice+and+fire&hl=&cd=10&source=gbs_api",
        infoLink:
          "http://books.google.co.in/books?id=YxpbAAAAMAAJ&dq=a+song+of+ice+and+fire&hl=&source=gbs_api",
        canonicalVolumeLink:
          "https://books.google.com/books/about/A_Storm_of_Swords.html?hl=&id=YxpbAAAAMAAJ",
      },
      saleInfo: {
        country: "IN",
        saleability: "NOT_FOR_SALE",
        isEbook: false,
      },
      accessInfo: {
        country: "IN",
        viewability: "NO_PAGES",
        embeddable: false,
        publicDomain: false,
        textToSpeechPermission: "ALLOWED",
        epub: {
          isAvailable: false,
        },
        pdf: {
          isAvailable: false,
        },
        webReaderLink:
          "http://play.google.com/books/reader?id=YxpbAAAAMAAJ&hl=&source=gbs_api",
        accessViewStatus: "NONE",
        quoteSharingAllowed: false,
      },
      searchInfo: {
        textSnippet:
          "THE BOOK BEHIND THE THIRD SEASON OF GAME OF THRONES, AN ORIGINAL SERIES NOW ON HBO. Here is the third book in the landmark series that has redefined imaginative fiction and become a modern masterpiece.",
      },
    },
  ],
};
