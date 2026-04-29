import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import BlueEconomy from "../assets/86977b19-ebe8-433e-ab94-9b4675be22a8.png";
import SummitObjectives from "../assets/SummitObjectives.jpeg";

import GalleryOne from "../assets/GalleryOne.jpeg";
import GalleryTwo from "../assets/GalleryTwo.jpeg";
import GalleryThree from "../assets/GalleryThree.jpeg";
import GalleryFour from "../assets/GalleryFour.jpeg";
import GalleryFive from "../assets/GalleryFive.jpeg";
import GallerySix from "../assets/GallerySix.jpeg";
import GallerySeven from "../assets/GallerySeven.jpeg";

import CavertonMarine from "../assets/CavertonMarine.png";
import NigerDeltaDevelopmentCommission from "../assets/NigerDeltaDevelopmentCommission.png";
import AkwaIbomStateGovernment from "../assets/AkwaIbomStateGovernment.png";
import RiversStateGovernment from "../assets/RiversStateGovernment.png";
import NLAInternational from "../assets/NLAInternational.png";
import TargetOneGroup from "../assets/TargetOneGroup.png";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import HeroImageOne from "../assets/HeroImageOne.jpeg";
import HeroImageThree from "../assets/HeroImageThree.jpeg";
import HeroImageFive from "../assets/HeroImageFive.jpeg";
import HeroImageSix from "../assets/HeroImageSix.jpeg";
import HeroImageSeven from "../assets/HeroImageSeven.jpeg";

import ChiefHost from "../assets/ChiefHost.jpg";
import KeynoteSpeaker from "../assets/KeynoteSpeaker.jpg";
import HostGovernor from "../assets/HostGovernor.webp";
import HostGovernor1 from "../assets/HostGovernor1.webp";
import SpecialGuest from "../assets/SpecialGuest.jpg";
import SpecialGuest1 from "../assets/SpecialGuest1.jpeg";
import SpecialGuest2 from "../assets/SpecialGuest2.jpg";
import SpecialGuest3 from "../assets/SpecialGuest3.jpg";
import SpecialGuest4 from "../assets/SpecialGuest4.jpg";

import FisheriesAquaculture from "../assets/FisheriesAquaculture.jpg";
import MaritimeTransportLogistics from "../assets/MaritimeTransportLogistics.jpg";
import CoastalTourism from "../assets/CoastalTourism.jpg";
import RenewableEnergy from "../assets/RenewableEnergy.jpg";
import OilGasTransformation from "../assets/OilGasTransformation.jpg";
import ClimateEnvironmentalSustainability from "../assets/ClimateEnvironmentalSustainability.jpg";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, Flip);

const SLIDER_SHIFT_PX = -210;
const SLIDER_INTERVAL_MS = 3000;
const SLIDER_TRANSITION_MS = 500;

const items = [
  {
    id: 1,
    text: "Niger Delta Development Commission",
    img: NigerDeltaDevelopmentCommission,
    alt: "Niger Delta Blue Economy",
  },
  {
    id: 2,
    text: "Caverton Marine",
    img: CavertonMarine,
    alt: "Niger Delta Blue Economy",
  },
  {
    id: 3,
    text: "Target One Group",
    img: TargetOneGroup,
    alt: "Niger Delta Blue Economy",
  },
  {
    id: 4,
    text: "NLA International",
    img: NLAInternational,
    alt: "Niger Delta Blue Economy",
  },
  {
    id: 5,
    text: "Akwa Ibom State Government",
    img: AkwaIbomStateGovernment,
    alt: "Niger Delta Blue Economy",
  },
  {
    id: 6,
    text: "Rivers State Government",
    img: RiversStateGovernment,
    alt: "Niger Delta Blue Economy",
  },
];

const industries = [
  {
    title: "Fisheries & Aquaculture",
    description:
      "Advancing sustainable fisheries and aquaculture systems to meet Africa’s rising seafood demand while generating employment, improving food security, and supporting coastal livelihoods.",
  },
  {
    title: "Maritime Transport & Logistics",
    description:
      "Enhancing port infrastructure, shipping systems, and inland waterways to improve trade efficiency, regional connectivity, and economic competitiveness across Nigeria and West Africa.",
  },
  {
    title: "Coastal Tourism",
    description:
      "Unlocking the immense potential of coastal and marine tourism to drive economic diversification, attract global investment, and create millions of sustainable jobs by 2030.",
  },
  {
    title: "Renewable Energy",
    description:
      "Harnessing offshore wind, tidal, and other ocean-based energy sources to power sustainable development, reduce carbon emissions, and strengthen energy security.",
  },
  {
    title: "Oil & Gas Transformation",
    description:
      "Driving innovation, efficiency, and environmental responsibility in the oil and gas sector while aligning with global sustainability and energy transition goals.",
  },
  {
    title: "Climate & Environmental Sustainability",
    description:
      "Protecting marine ecosystems, coastlines, and biodiversity through climate resilience strategies, conservation initiatives, and sustainable resource management.",
  },
];

const galleryIndustries = [
  {
    id: "day-1-recap",
    category: "Summit Recap",
    title:
      "DAY 1 RECAP – Niger Delta Blue Economy Investment Summit 2026 Opens with Strong Investment and Policy Focus",
    date: "February 18, 2026",
    author: "admin",
    description:
      "The Niger Delta Blue Economy Investment Summit 2026 officially commenced at Four Points by Sheraton, Ikot Ekpene, Akwa Ibom State, bringing together government leaders, industry stakeholders, development partners, and investors to advance the blue economy as a strategic pathway for sustainable development in the Niger Delta.",
    image: HeroImageSix,
    sourceUrl: "",
    content: [
      {
        type: "paragraph",
        text: "The Niger Delta Blue Economy Investment Summit 2026 officially commenced at Four Points by Sheraton, Ikot Ekpene, Akwa Ibom State, bringing together government leaders, industry stakeholders, development partners, and investors to advance the blue economy as a strategic pathway for sustainable development in the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "The opening day established a clear direction for the Summit: mobilising investment, strengthening partnerships, and aligning policy frameworks to unlock the region’s vast marine and coastal assets for inclusive growth, economic diversification, and long-term prosperity.",
      },
      {
        type: "image",
        alt: "img 9787",
        src: HeroImageFive,
      },
      {
        type: "heading",
        text: "Opening Ceremony Sets Strategic Tone",
      },
      {
        type: "paragraph",
        text: "Proceedings began with registration and welcome engagements, followed by opening formalities and goodwill messages from national and regional stakeholders. The ceremony underscored the urgency of transitioning the Niger Delta toward a diversified, ocean-based economy capable of generating jobs, strengthening livelihoods, and reducing dependence on extractive industries.",
      },
      {
        type: "paragraph",
        text: "In his welcome remarks, the host state reaffirmed its commitment to positioning Akwa Ibom as a regional hub for blue economy development, supported by its extensive coastline, expanding maritime infrastructure, and investment-ready policy environment.",
      },
      {
        type: "image",
        alt: "img 9874",
        src: HeroImageSix,
      },
      {
        type: "image",
        alt: "img 1715",
        src: HeroImageSeven,
      },
      {
        type: "image",
        alt: "img 9784",
        src: "",
      },
      {
        type: "image",
        alt: "img 1719",
        src: "",
      },
      {
        type: "heading",
        text: "High-Level Fireside Dialogue on the Future of the Blue Economy",
      },
      {
        type: "paragraph",
        text: "A central highlight of Day One was the high-level fireside chat on “The Rise of the Tide of the Blue Economy,” featuring senior government leaders and private-sector stakeholders. The session explored policy direction, infrastructure priorities, private-sector participation, and regional collaboration required to accelerate blue economy growth across the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "Speakers emphasised that the region’s marine and coastal resources represent a shared national asset capable of driving industrialisation, maritime trade, fisheries development, tourism, renewable energy, and environmental sustainability.",
      },
      {
        type: "heading",
        text: "Akwa Ibom Emerging as Regional Investment Anchor",
      },
      {
        type: "paragraph",
        text: "Discussions throughout the day reinforced Akwa Ibom State’s role as an emerging anchor for blue economy investment. Its strategic Atlantic access, port development ambitions, and integrated industrial planning were highlighted as catalysts for logistics expansion, export-oriented manufacturing, and marine resource processing across the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "Participants also underscored the importance of complementary investments in shoreline protection, coastal infrastructure, and environmental resilience to sustain long-term investor confidence and protect coastal communities.",
      },
      {
        type: "heading",
        text: "From Dialogue to Investment Mobilisation",
      },
      {
        type: "paragraph",
        text: "Across engagements, stakeholders converged on a shared priority: translating policy dialogue into bankable projects and investment pipelines. Emphasis was placed on strengthening governance frameworks, improving maritime security, enabling private-sector participation, and ensuring that coastal and riverine communities remain active beneficiaries of blue economy growth.",
      },
      {
        type: "paragraph",
        text: "Day One concluded with renewed commitment from public and private stakeholders to deepen collaboration throughout the Summit and beyond, setting the stage for policy and governance discussions on Day Two.",
      },
    ],
  },
  {
    id: "day-2-recap",
    category: "Summit Recap",
    title:
      "DAY 2 RECAP – Policy Dialogue and Strategic Launches Mark Implementation Phase of Niger Delta Blue Economy Agenda",
    date: "February 18, 2026",
    author: "admin",
    description:
      "Day Two of the Niger Delta Blue Economy Investment Summit 2026 progressed into high-level policy and governance dialogue, consolidating political alignment, regulatory coherence, and institutional collaboration required to advance sustainable blue economy development across the Niger Delta.",
    image: HeroImageOne,
    sourceUrl: "",
    content: [
      {
        type: "paragraph",
        text: "Day Two of the Niger Delta Blue Economy Investment Summit 2026 progressed into high-level policy and governance dialogue, consolidating political alignment, regulatory coherence, and institutional collaboration required to advance sustainable blue economy development across the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "Building on the investment and partnership momentum established on Day One, discussions shifted toward governance frameworks, sectoral strategies, and implementation mechanisms needed to translate vision into measurable economic and community outcomes.",
      },
      {
        type: "heading",
        text: "Keynote Highlights Shared Prosperity and Regional Cooperation",
      },
      {
        type: "paragraph",
        text: "The day opened with a keynote address on “Unlocking Blue Economy Potentials for Shared Prosperity in the Niger Delta,” which emphasised the need for coordinated national and regional action to harness marine resources responsibly and competitively.",
      },
      {
        type: "paragraph",
        text: "The address highlighted that sustainable blue economy growth depends on credible institutions, policy continuity, and long-term strategic planning capable of attracting global investment while safeguarding environmental assets.",
      },
      {
        type: "heading",
        text: "Strategic Panels Address Governance, Security, and Sustainability",
      },
      {
        type: "paragraph",
        text: "A series of technical and policy panels examined critical enablers of blue economy development, including maritime security and safe marine transportation, regulatory and institutional reform, regional cooperation, sustainable fisheries and aquaculture, and environmental remediation.",
      },
      {
        type: "paragraph",
        text: "Speakers underscored that tackling marine pollution, strengthening maritime governance, and improving regulatory clarity are essential to unlocking investment in shipping, fisheries, coastal tourism, offshore energy, and marine logistics across the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "Sessions on food security highlighted the transformative potential of fisheries and aquaculture value chains to generate employment, enhance nutrition, and strengthen coastal livelihoods when supported by infrastructure, financing, and market access.",
      },
      {
        type: "heading",
        text: "Launch of Roadmap and Development Fund Signals Shift to Action",
      },
      {
        type: "paragraph",
        text: "A defining milestone of Day Two was the formal launch of the Niger Delta Blue Economy Roadmap and the Niger Delta Blue Economy Development Fund. These instruments establish a structured framework for project prioritisation, financing mobilisation, and coordinated implementation across the region.",
      },
      {
        type: "paragraph",
        text: "The roadmap outlines strategic sector pathways, governance mechanisms, and investment priorities, while the development fund is designed to catalyse private-sector participation and blended financing for bankable blue economy projects.",
      },
      {
        type: "paragraph",
        text: "Together, they mark a transition from dialogue to execution—anchoring the Summit’s outcomes in actionable programmes capable of delivering jobs, enterprise growth, environmental protection, and sustainable coastal development.",
      },
      {
        type: "heading",
        text: "Toward Measurable Impact for Coastal Communities",
      },
      {
        type: "paragraph",
        text: "Closing reflections emphasised that the success of the Niger Delta blue economy agenda will ultimately be measured by tangible improvements in livelihoods, skills development, enterprise opportunities, and environmental resilience across coastal and riverine communities.",
      },
      {
        type: "paragraph",
        text: "With strengthened partnerships, clearer policy direction, and dedicated financing mechanisms now in place, stakeholders affirmed a shared commitment to advancing an inclusive, investment-ready blue economy that supports regional prosperity and national economic diversification.",
      },
      {
        type: "paragraph",
        text: "The Summit concluded with a collective call for sustained collaboration among government, industry, investors, and communities to translate the Niger Delta’s marine potential into lasting development outcomes.",
      },
    ],
  },
  {
    id: "caverton-marine-partnership",
    category: "Partnership News",
    title:
      "Niger Delta Blue Economy Summit and Caverton Marine Partner to Boost Sustainable Marine Transport",
    date: "January 18, 2026",
    author: "admin",
    description:
      "Here’s an overview of a growing partnership in Nigeria’s marine sector focused on safety and sustainability.",
    image: HeroImageSeven,
    sourceUrl:
      "https://www.vanguardngr.com/2026/01/niger-delta-blue-economy-summit-partners-caverton-marine-on-sustainable-marine-transport/",
    content: [
      {
        type: "paragraph",
        text: "Here’s an overview of a growing partnership in Nigeria’s marine sector focused on safety and sustainability.",
      },
      {
        type: "paragraph",
        text: "The Niger Delta Blue Economy Investment Summit has formed a strategic partnership with Caverton Marine to improve marine transport safety and sustainability across the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "The collaboration was announced after a high-level meeting in Lagos between the Summit’s organising committee and Caverton Marine leadership. The goal is to address ongoing safety challenges on the region’s waterways while promoting the use of modern, low-emission passenger vessels.",
      },
      {
        type: "paragraph",
        text: "Caverton Marine — an indigenous company known for advancing water transport services through public-private initiatives like ferry projects in Lagos — is expected to bring its expertise to help strengthen standards and operations in the Niger Delta.",
      },
      {
        type: "paragraph",
        text: "According to Cedric Ogwu of the Summit committee, the partnership seeks to replicate successful marine transport models seen in other Nigerian states, especially where water travel is essential.",
      },
      {
        type: "paragraph",
        text: "The Summit will take place from February 9 to 11 at the Four Points by Sheraton Hotel in Ikot-Ekpene, Akwa Ibom State, convening government officials, investors, industry leaders and development partners to unlock investment opportunities across the region’s blue economy.",
      },
      {
        type: "paragraph",
        text: "High-profile speakers, including former Prime Minister of Tunisia Mehdi Jomaa, are set to attend.",
      },
    ],
  },
];

const strategicItems = [
  {
    icon: "groups",
    title: "Networking & Strategic Partnerships",
    description:
      "Engage with policymakers, investors, and industry leaders to foster meaningful collaborations.",
  },
  {
    icon: "gavel",
    title: "Policy & Governance Dialogues",
    description:
      "Contribute to the development of frameworks that promote sustainable ocean resource management.",
  },
  {
    icon: "trending_up",
    title: "Investment Opportunities",
    description:
      "Discover high-potential ventures across aquaculture, renewable energy, tourism, and maritime logistics.",
  },
  {
    icon: "school",
    title: "Capacity Building",
    description:
      "Strengthen the capabilities of youth, women, and local communities through targeted training and improved access to resources.",
  },
];

const industryImages = [
  FisheriesAquaculture,
  MaritimeTransportLogistics,
  CoastalTourism,
  RenewableEnergy,
  OilGasTransformation,
  ClimateEnvironmentalSustainability,
];

const industrySlides = industries.map((item, index) => ({
  ...item,
  image: industryImages[index % industryImages.length],
}));

const getVisibleSliderItems = (startIndex) =>
  Array.from(
    { length: 3 },
    (_, offset) => items[(startIndex + offset) % items.length],
  );

export default function Home() {
  const [sliderStartIndex, setSliderStartIndex] = useState(0);
  const [shift, setShift] = useState(0);
  const [newItemIn, setNewItemIn] = useState(false);

  const pageRef = useRef(null);
  const smoothWrapperRef = useRef(null);
  const smoothContentRef = useRef(null);
  const applicationCardsRef = useRef(null);
  const imagePinRef = useRef(null);
  const carouselSectionRef = useRef(null);
  const carouselStripRef = useRef(null);
  const galleryWrapRef = useRef(null);
  const galleryCleanupRef = useRef(null);
  const serviceGalleryEight = useRef(null);
  const sliderTimeoutsRef = useRef([]);
  const [isContentPageOverlayOpen, setIsContentPageOverlayOpen] =
    useState(false);
  const [activePostId, setActivePostId] = useState(
    galleryIndustries[0]?.id ?? null,
  );

  const visible = useMemo(
    () => getVisibleSliderItems(sliderStartIndex),
    [sliderStartIndex],
  );

  const activePost = useMemo(
    () =>
      galleryIndustries.find((post) => post.id === activePostId) ??
      galleryIndustries[0],
    [activePostId],
  );

  const relatedPosts = useMemo(
    () => galleryIndustries.filter((post) => post.id !== activePost?.id),
    [activePost],
  );

  const openContentPageOverlay = (postId) => {
    setActivePostId(postId);
    setIsContentPageOverlayOpen(true);
  };

  const closeContentPageOverlay = () => {
    setIsContentPageOverlayOpen(false);
  };

  const openRelatedPost = (postId) => {
    setActivePostId(postId);
  };

  useEffect(() => {
    if (!isContentPageOverlayOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const smoother = ScrollSmoother.get();

    document.body.style.overflow = "hidden";
    smoother?.paused(true);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsContentPageOverlayOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      smoother?.paused(false);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isContentPageOverlayOpen]);

  useEffect(() => {
    const clearSliderTimeouts = () => {
      sliderTimeoutsRef.current.forEach(window.clearTimeout);
      sliderTimeoutsRef.current = [];
    };

    const intervalId = window.setInterval(() => {
      setShift(SLIDER_SHIFT_PX);

      const advanceTimeout = window.setTimeout(() => {
        setSliderStartIndex(
          (currentIndex) => (currentIndex + 1) % items.length,
        );
        setShift(0);
        setNewItemIn(true);

        const resetNewItemTimeout = window.setTimeout(() => {
          setNewItemIn(false);
        }, SLIDER_TRANSITION_MS);

        sliderTimeoutsRef.current.push(resetNewItemTimeout);
      }, SLIDER_TRANSITION_MS);

      sliderTimeoutsRef.current.push(advanceTimeout);
    }, SLIDER_INTERVAL_MS);

    return () => {
      window.clearInterval(intervalId);
      clearSliderTimeouts();
    };
  }, []);

  // Smooth scroll should be created before the other ScrollTriggers.
  useGSAP(
    () => {
      if (!smoothWrapperRef.current || !smoothContentRef.current)
        return undefined;

      ScrollTrigger.config({ ignoreMobileResize: true });

      const existingSmoother = ScrollSmoother.get();
      if (existingSmoother) existingSmoother.kill();

      const smoother = ScrollSmoother.create({
        wrapper: smoothWrapperRef.current,
        content: smoothContentRef.current,
        smooth: 1.2,
        smoothTouch: 0.1,
        effects: true,
        normalizeScroll: true,
      });

      ScrollTrigger.refresh();

      return () => {
        smoother.kill();
        ScrollTrigger.clearScrollMemory();
      };
    },
    { scope: pageRef },
  );

  // ApplicationBox stagger animation
  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".ApplicationBox");

      boxes.forEach((box) => {
        gsap.to(box, {
          y: 0,
          scrollTrigger: {
            trigger: box,
            start: "bottom bottom",
            end: "top 20%",
            scrub: 1.2,
          },
        });
      });
    },
    { scope: applicationCardsRef },
  );

  // Pinned industry image/content section.
  useGSAP(
    () => {
      const section = imagePinRef.current;
      if (!section) return undefined;

      const listItems = gsap.utils.toArray(
        ".ApplicationChartDesignItem",
        section,
      );
      const slides = gsap.utils.toArray(".ApplicationChartSlide", section);
      const fill = section.querySelector(".fill");

      if (!listItems.length || !slides.length || !fill) return undefined;

      let activeIndex = 0;

      const setActive = (index) => {
        listItems.forEach((item, itemIndex) => {
          item.classList.toggle("is-active", itemIndex === index);
        });

        slides.forEach((slide, slideIndex) => {
          gsap.to(slide, {
            autoAlpha: slideIndex === index ? 1 : 0,
            x: slideIndex === index ? 0 : slideIndex < index ? -60 : 60,
            duration: slideIndex === index ? 0.35 : 0.25,
            overwrite: true,
          });
        });
      };

      gsap.set(fill, {
        transformOrigin: "top center",
        scaleY: 0,
      });

      gsap.set(slides, {
        autoAlpha: 0,
        x: 60,
      });

      gsap.set(slides[0], {
        autoAlpha: 1,
        x: 0,
      });

      setActive(0);

      const trigger = ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: () => `+=${window.innerHeight * Math.max(slides.length - 1, 1)}`,
        pin: true,
        scrub: 0.3,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          gsap.set(fill, { scaleY: self.progress });

          const nextIndex = Math.min(
            slides.length - 1,
            Math.floor(self.progress * slides.length),
          );

          if (nextIndex !== activeIndex) {
            activeIndex = nextIndex;
            setActive(activeIndex);
          }
        },
      });

      return () => trigger.kill();
    },
    { scope: imagePinRef },
  );

  // Horizontal carousel animation.
  useGSAP(
    () => {
      const section = carouselSectionRef.current;
      const strip = carouselStripRef.current;

      if (!section || !strip) return undefined;

      const getScrollDistance = () =>
        Math.max(0, strip.scrollWidth - document.documentElement.clientWidth);

      if (getScrollDistance() === 0) return undefined;

      const tween = gsap.to(strip, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          pinSpacing: true,
          start: "top top",
          end: () => `+=${getScrollDistance()}`,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      const images = Array.from(strip.querySelectorAll("img"));
      const refreshOnImageLoad = () => ScrollTrigger.refresh();

      images.forEach((image) => {
        if (!image.complete) {
          image.addEventListener("load", refreshOnImageLoad, { once: true });
        }
      });

      ScrollTrigger.refresh();

      return () => {
        images.forEach((image) => {
          image.removeEventListener("load", refreshOnImageLoad);
        });
        tween.kill();
      };
    },
    { scope: carouselSectionRef },
  );

  // Flip gallery animation.
  useLayoutEffect(() => {
    let isActive = true;
    let resizeFrameId = null;

    const destroyGalleryTween = () => {
      galleryCleanupRef.current?.();
      galleryCleanupRef.current = null;
    };

    const createGalleryTween = () => {
      const galleryElement = serviceGalleryEight.current;
      const galleryWrap = galleryWrapRef.current;

      if (!isActive || !galleryElement || !galleryWrap) return;

      destroyGalleryTween();

      const galleryItems = Array.from(
        galleryElement.querySelectorAll(".ServiceGalleryItem"),
      );

      if (!galleryItems.length) return;

      galleryElement.classList.remove("ServiceGalleryFinal");

      const ctx = gsap.context(() => {
        galleryElement.classList.add("ServiceGalleryFinal");
        const finalState = Flip.getState(galleryItems);
        galleryElement.classList.remove("ServiceGalleryFinal");

        const flipTween = Flip.to(finalState, {
          simple: true,
          ease: "power2.inOut",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: galleryElement,
            start: "center center",
            end: "+=100%",
            scrub: true,
            pin: galleryWrap,
            invalidateOnRefresh: true,
          },
        });

        timeline.add(flipTween);

        galleryCleanupRef.current = () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
          ctx.revert();
          galleryElement.classList.remove("ServiceGalleryFinal");
          gsap.set(galleryItems, { clearProps: "all" });
        };
      }, galleryWrap);
    };

    const handleResize = () => {
      if (!isActive) return;

      if (resizeFrameId) window.cancelAnimationFrame(resizeFrameId);

      resizeFrameId = window.requestAnimationFrame(() => {
        createGalleryTween();
        ScrollTrigger.refresh();
      });
    };

    const initGallery = () => {
      if (!isActive) return;
      createGalleryTween();
      window.addEventListener("resize", handleResize);
      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) {
      document.fonts.ready.then(initGallery);
    } else {
      initGallery();
    }

    return () => {
      isActive = false;
      window.removeEventListener("resize", handleResize);

      if (resizeFrameId) window.cancelAnimationFrame(resizeFrameId);

      destroyGalleryTween();
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Niger Delta Blue Economy Summit</title>
        <meta
          name="description"
          content="Policy Dialogue and Strategic Launches Mark Implementation Phase of Niger Delta Blue Economy Agenda Day Two of the Niger Delta Blue Economy Investment Summit 2026 progressed into high-level policy and governance dialogue, consolidating political alignment, regulatory coherence, and institutional collaboration required to advance sustainable blue economy development across the Niger Delta."
        />
        <link
          rel="canonical"
          href="https://www.nigerdeltablueeconomysummit.org/"
        />

        <meta property="og:title" content="Niger Delta Blue Economy Summit" />
        <meta
          property="og:description"
          content="Niger Delta Blue Economy Summit"
        />
        <meta
          property="og:url"
          content="https://www.nigerdeltablueeconomysummit.org/"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />
        <meta name="robots" content="index, follow" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Niger Delta Blue Economy Summit" />
        <meta
          name="twitter:description"
          content="Policy Dialogue and Strategic Launches Mark Implementation Phase of Niger Delta Blue Economy Agenda Day Two of the Niger Delta Blue Economy Investment Summit 2026 progressed into high-level policy and governance dialogue, consolidating political alignment, regulatory coherence, and institutional collaboration required to advance sustainable blue economy development across the Niger Delta."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/quinn-daisies-platform/image/upload/v1718651332/Quinn_Daisies_Blog/logo1_y3fmfr.svg"
        />

        <meta
          name="keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />
        <meta
          property="og:keywords"
          content="Expert logistics solutions including international shipping, packaging services, customs clearance, and importation services across 150+ countries."
        />

        <meta name="author" content="Ebire Folayemi Michael" />
        <meta name="revised" content="12th of April 2025" />
      </Helmet>

      <div ref={pageRef}>
        <Navbar />

        <div id="smooth-wrapper" ref={smoothWrapperRef}>
          <div id="smooth-content" ref={smoothContentRef}>
            <section className="HeroContainer" id="home">
              <img src={HeroImageOne} alt="Blue Economy" />

              <div className="HeroOverlay">
                <div className="HeroOverlayContent">
                  <h1>
                    Niger Delta Blue Economy Investment Summit 2026{" "}
                    <span>Opens with Strong Investment and Policy Focus</span>
                  </h1>
                  <p>
                    Leaders, investors, and stakeholders convened in Ikot
                    Ekpene, Akwa Ibom State to advance partnerships, policy
                    alignment, and sustainable blue economy development across
                    the Niger Delta.
                  </p>

                  <a href="#blogpost" className="ApplicationButton">
                    <p>Read More About The Summit</p>
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </a>
                </div>

                <div className="HeroIndustrySlider">
                  <div
                    className="HeroIndustrySliderContainer"
                    style={{
                      transform: `translateX(${shift}px)`,
                      transition: `transform ${SLIDER_TRANSITION_MS}ms ease`,
                    }}
                  >
                    {visible.map((item, index) => (
                      <div
                        key={item.id}
                        className={`HeroIndustrySliderContainerItem ${
                          newItemIn && index === 2 ? "slide-in-new" : ""
                        }`}
                      >
                        <img src={item.img} alt={item.alt} />
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="White-Background Container Flex Gap-XL">
              <div className="SectionHeader">
                <h2>Strategic Opportunities & Impact Initiatives</h2>
              </div>

              <div className="ApplicationContainer" ref={applicationCardsRef}>
                {strategicItems.map((item, index) => (
                  <div className="ApplicationBox" key={index}>
                    {/* Google Material Icon */}
                    <span className="material-symbols-outlined ApplicationIcon">
                      {item.icon}
                    </span>

                    <h3>{item.title}</h3>
                    <p className="ApplicationDescription">{item.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="Container ServicesInformation" id="about">
              <span>About the Summit</span>
              <h4>
                The Niger Delta Blue Economy Investment Summit is a premier,
                high-level platform established to catalyse the sustainable
                development of the Niger Delta’s vast maritime and aquatic
                resources.
              </h4>

              <div className="ServicesInformationBoxContainer">
                <div className="ServicesInformationBox">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Inclusive Stakeholder Engagement</h6>
                    <p>
                      A fully inclusive, first-of-its-kind platform uniting
                      policymakers, investors, industry leaders, academia,
                      development partners, and civil society to shape a shared
                      vision for the Niger Delta’s future.
                    </p>
                  </div>
                  <h3>
                    100<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Policy, Dialogue & Collaboration</h6>
                    <p>
                      A high-impact environment for strategic dialogue,
                      knowledge exchange, and multi-stakeholder
                      collaboration—strengthening governance frameworks,
                      fostering partnerships, and building the political will
                      needed to unlock maritime potential.
                    </p>
                  </div>
                  <h3>
                    95<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Sustainable Impact Outcomes</h6>
                    <p>
                      Focused on translating opportunities into measurable
                      results, including improved food security, enhanced
                      climate resilience, and long-term sustainable economic
                      development.
                    </p>
                  </div>
                  <h3>
                    90<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Strategic Vision & Positioning</h6>
                    <p>
                      Guided by its central theme, the Summit is strategically
                      positioned to elevate the Niger Delta as a leading force
                      in Africa’s rapidly growing blue economy ecosystem.
                    </p>
                  </div>
                  <h3>
                    92<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Global Participation & Influence</h6>
                    <p>
                      Hosting over 350 high-level delegates from Nigeria, across
                      Africa, and internationally—creating a dynamic platform
                      for investment dialogue, policy alignment, and
                      cross-border collaboration.
                    </p>
                  </div>
                  <h3>
                    88<text>%</text>
                  </h3>
                </div>

                <div className="ServicesInformationBox">
                  <div className="ServicesInformationBoxHeader">
                    <h6>Action-Driven Commitments</h6>
                    <p>
                      Beyond conversations, the Summit is designed to catalyse
                      tangible outcomes—mobilising investments, strengthening
                      partnerships, and driving actionable commitments for
                      long-term regional transformation.
                    </p>
                  </div>
                  <h3>
                    92<text>%</text>
                  </h3>
                </div>
              </div>

              <p className="ServicesInformationBottomText">
                Designed as a strategic convergence point for policy,
                investment, and innovation, the Summit seeks to unlock the
                region’s blue economy potential as a driver of inclusive
                economic growth, environmental restoration, job creation, and
                long-term livelihood transformation.
              </p>

              <p className="ServicesInformationBottomText">
                At its core, the Summit addresses a critical need: aligning the
                region’s natural endowments with coordinated action, targeted
                investment, and forward-thinking policy frameworks. By
                mobilising both public and private sector participation, it aims
                to channel resources into high-impact sectors while promoting
                responsible stewardship of marine and coastal ecosystems.
              </p>
            </section>

            <section className="White-Background Container Gap-XL">
              <div className="SectionColorHeader">
                <span>Niger Delta Blue Economy Investment Summit</span>
                <h2>
                  The Niger Delta is entering a defining era—one that presents
                  both an urgent challenge and an unprecedented opportunity.
                </h2>
              </div>

              <div className="Flex Gap-SM">
                <div className="SectionBoxSmall">
                  <h2>100%</h2>
                  <p>
                    Despite these opportunities, challenges such as weak
                    regulatory systems, poor coordination, environmental
                    degradation, climate impacts, and limited investment have
                    slowed progress. This summit seeks to reverse that
                    trajectory by rallying key actors around a unified regional
                    strategy.
                  </p>
                </div>

                <div className="SectionBoxLarge">
                  <img src={HeroImageThree} alt="Quinn Daisies AI operations" />
                </div>

                <div className="SectionBoxSmall">
                  <p>
                    With approximately 853 kilometers of coastline and a vast
                    network of rivers, mangroves, fisheries, and marine
                    ecosystems, the Niger Delta holds unmatched potential for
                    sustainable economic growth. The blue economy—covering
                    sectors such as fisheries, aquaculture, maritime transport,
                    coastal tourism, renewable energy, and ocean governance—is
                    projected to contribute over $405 billion to Africa’s
                    economy by 2030.
                  </p>
                </div>
              </div>
            </section>

            <section
              className="White-Background ApplicationImageDesign"
              ref={imagePinRef}
              id="industries"
            >
              <div className="ApplicationChartContentListContainer">
                <div className="fill" />
                <div className="ApplicationChartContentList">
                  <h2 className="ApplicationChartContentListHeader">
                    Key Blue Economy Sectors Driving Growth & Innovation
                  </h2>
                  {industrySlides.map((item, index) => (
                    <div
                      key={item.title}
                      className={`ApplicationChartDesignItem ${index === 0 ? "is-active" : ""}`}
                      data-index={index}
                    >
                      <h4>{item.title}</h4>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ApplicationChartContent">
                <div className="ApplicationChartSlides">
                  {industrySlides.map((item, index) => (
                    <div
                      key={item.title}
                      className={`ApplicationChartSlide ${index === 0 ? "is-active" : ""}`}
                    >
                      <div className="ApplicationChartContentContainer">
                        <img src={item.image} alt={item.title} />

                        <div className="ApplicationChartContentContainerContent">
                          <p className="ApplicationChartContentContainerContentText">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="ServiceGallerySection">
              <div className="ServiceGalleryWrap" ref={galleryWrapRef}>
                <div
                  className="ServiceGallery ServiceGalleryBento ServiceGallerySwitch"
                  ref={serviceGalleryEight}
                >
                  <div className="ServiceGalleryItem">
                    <img src={GalleryOne} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={GalleryTwo} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={BlueEconomy} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={GalleryThree} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={GalleryFour} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={GalleryFive} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={GallerySix} alt="Niger Delta Blue Economy" />
                  </div>
                  <div className="ServiceGalleryItem">
                    <img src={GallerySeven} alt="Niger Delta Blue Economy" />
                  </div>
                </div>
              </div>

              <div className="Container Gap-XL ServicePosition" id="blogpost">
                <div className="ServiceList">
                  <h3>
                    Summit Highlights & Key Developments Shaping the Future of
                    the Niger Delta Blue Economy
                  </h3>
                  <p className="ServiceListText">
                    Explore key moments, strategic announcements, and major
                    outcomes from the Niger Delta Blue Economy Investment
                    Summit, capturing the progress, partnerships, and policy
                    directions driving sustainable growth and transformation
                    across the region.
                  </p>
                </div>

                <div className="ServiceListBoxContainer">
                  {galleryIndustries.map((industry) => (
                    <div className="ServiceListBox" key={industry.title}>
                      <div className="ServiceListBoxContent">
                        <h4>{industry.title}</h4>
                        <p className="ServiceListBoxContentText">
                          {industry.description}
                        </p>

                        <button
                          type="button"
                          className="ApplicationButton"
                          onClick={() => openContentPageOverlay(industry.id)}
                        >
                          <p>Learn More</p>
                          <span className="material-symbols-outlined">
                            arrow_outward
                          </span>
                        </button>
                      </div>

                      <img src={industry.image} alt={industry.title} />
                    </div>
                  ))}
                </div>
              </div>
            </section>

            <section className="White-Background Container Gap-XL">
              <div className="Flex Gap-XL">
                <div className="Column ApplicationFlexWidth">
                  <div className="ApplicationSectionColorHeader">
                    <span>Summit Objectives</span>
                    <h2>Niger Delta Blue Economy Investment Summit</h2>
                    <p>
                      The Niger Delta Blue Economy Investment Summit is designed
                      to deliver a structured, outcome-driven framework that
                      accelerates the sustainable development of the Niger
                      Delta’s blue economy through collaboration, investment,
                      and policy alignment. Its core objectives include:
                    </p>
                  </div>

                  <div className="Column Gap-SM">
                    <div className="ApplicationBoxSmall Flex Gap-SM">
                      <p>
                        Facilitate dialogue between government, private sector,
                        academia, international organisations, and civil
                        society.
                      </p>
                    </div>

                    <div className="ApplicationBoxSmall Flex Gap-SM">
                      <p>
                        Develop a coordinated roadmap for financing and
                        implementing blue economy interventions.
                      </p>
                    </div>

                    <div className="ApplicationBoxSmall Flex Gap-SM">
                      <p>
                        Strengthen regional cooperation and alignment with the
                        African Union’s Africa Blue Economy Strategy and
                        National Policy on Marine and Blue Economy.
                      </p>
                    </div>

                    <div className="ApplicationBoxSmall Flex Gap-SM">
                      <p>
                        Ensure that women, youth, and coastal communities are
                        central to the development agenda.
                      </p>
                    </div>

                    <div className="ApplicationBoxSmall Flex Gap-SM">
                      <p>
                        Establish a long-term platform for policy innovation,
                        resource mobilisation, and sustainable development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ApplicationFlexImageBox">
                  <img src={SummitObjectives} alt="Niger Delta Blue Economy" />
                </div>
              </div>
            </section>

            <section className="Container Gap-XL">
              <div className="ApplicationSectionColorHeader">
                <span>Watch This</span>
                <h2>Niger Delta Blue Economy Investment Summit</h2>
              </div>
              <iframe
                src="https://www.youtube.com/embed/xDUMnNoGql4"
                title="Niger Delta Blue Economy Summit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ width: "100%", height: "600px", border: "none" }}
              ></iframe>
            </section>

            <section
              className="White-Background"
              id="CarouselAnimation"
              ref={carouselSectionRef}
            >
              <div className="ApplicationCarousel" id="leadership">
                <div className="ApplicationCarouselFlex">
                  <h2>Distinguished Leadership & Key Speakers</h2>

                  <div className="ApplicationCarouselContainer">
                    <p className="ApplicationCarouselContainerText">
                      Engage with an exceptional lineup of influential leaders
                      and renowned experts, featuring distinguished voices from
                      government, industry, academia, and the global development
                      community.
                    </p>
                  </div>
                </div>

                <div className="ApplicationCarouselViewport">
                  <div
                    className="ApplicationCarouselSlide"
                    ref={carouselStripRef}
                  >
                    <div className="ApplicationCarouselSlideBox">
                      <img src={ChiefHost} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Chief Dr. Samuel Ogbuku</h4>
                        <p>Managing Director, NDDC - Chief host</p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBoxImage">
                      <img
                        src="https://res.cloudinary.com/renaissance-images/image/upload/v1761835851/QuinnDaisies/165478_jbtjkf.jpg"
                        alt="Niger Delta Blue Economy"
                      />
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img
                        src={KeynoteSpeaker}
                        alt="Niger Delta Blue Economy"
                      />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>H.E. Mehdi Jomaa</h4>
                        <p>
                          Former Prime Minister of Tunisia (Keynote) - Keynote
                          Speaker
                        </p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={HostGovernor} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>H.E Pastor Umo Eno</h4>
                        <p>
                          Executive Governor of Akwa Ibom State - Host Governor
                        </p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={HostGovernor1} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Sir Siminalayi Fubara</h4>
                        <p>
                          Executive Governor of Rivers State - Host Governor
                        </p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={SpecialGuest} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Jonathan Turner</h4>
                        <p>
                          Director and Co-founder, NLA Limited, United Kingdom -
                          Special Guest
                        </p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={SpecialGuest1} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Vice Admiral Idi Abbas</h4>
                        <p>Chief of Naval staff - Special Guest</p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={SpecialGuest2} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Nwabisa Matoti</h4>
                        <p>
                          South African International Maritime Institute -
                          Special Guest
                        </p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={SpecialGuest3} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Ahmed Y. Hersi</h4>
                        <p>
                          Director , Maritime Institute, Horn of Africa, Region.
                          Ethiopia - Special Guest
                        </p>
                      </div>
                    </div>

                    <div className="ApplicationCarouselSlideBox">
                      <img src={SpecialGuest4} alt="Niger Delta Blue Economy" />
                      <div className="ApplicationCarouselSlideBoxContent">
                        <h4>Osaretin Grace Ihu</h4>
                        <p>
                          Special Adviser to NSA on Energy Security and Niger
                          Delta - Special Guest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="White-Background Container ApplicationBannerContainer">
              <div className="ApplicationBanner">
                <img
                  src="https://res.cloudinary.com/renaissance-images/image/upload/v1775604123/QuinnDaisies/future-visions-business-technology-concept_ehpo8p.jpg"
                  alt="Niger Delta Blue Economy"
                />

                <div className="ApplicationBannerOverlay">
                  <h2>
                    Need Deep Technical Expertise Supporting Modern Systems
                  </h2>
                  <p className="ApplicationText">
                    Turn your professional, technical and strategic difficulties
                    into a competitive advantage with our expert solutions.
                  </p>

                  <Link to="/home" className="ApplicationButton">
                    <p>Learn More Here</p>
                    <span className="material-symbols-outlined">
                      arrow_outward
                    </span>
                  </Link>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        </div>
      </div>

      {isContentPageOverlayOpen && activePost && (
        <section
          className="PostContentOverlay"
          role="dialog"
          aria-modal="true"
          aria-labelledby="active-post-title"
        >
          <div
            className="PostContentOverlayEffects"
            aria-hidden="true"
            onClick={closeContentPageOverlay}
          />

          <button
            type="button"
            className="ApplicationButton PostContentOverlayClose"
            onClick={closeContentPageOverlay}
          >
            <p>Close Page</p>
            <span className="material-symbols-outlined">close</span>
          </button>

          <div className="PostContentOverlayFlex PostContentOverlayContents">
            <article className="PostContentOverlayFlexContent PostContentOverlayContent">
              <span>{activePost.category}</span>
              <h2 id="active-post-title">{activePost.title}</h2>
              <p className="PostContentOverlayMeta">
                Leave a Comment / By {activePost.author} / {activePost.date}
              </p>

              {activePost.image && (
                <img
                  className="PostContentOverlayHeroImage"
                  src={activePost.image}
                  alt={activePost.title}
                />
              )}

              <div className="PostContentOverlayBody">
                {activePost.content.map((block, index) => {
                  if (block.type === "heading") {
                    return (
                      <h3 key={activePost.id + "-heading-" + index}>
                        {block.text}
                      </h3>
                    );
                  }

                  if (block.type === "image") {
                    return block.src ? (
                      <img
                        key={activePost.id + "-image-" + index}
                        className="PostContentOverlayInlineImage"
                        src={block.src}
                        alt={block.alt || activePost.title}
                      />
                    ) : (
                      <div
                        key={activePost.id + "-placeholder-" + index}
                        className="PostContentOverlayImagePlaceholder"
                      >
                        <span className="material-symbols-outlined">image</span>
                        <p>Add image here: {block.alt}</p>
                      </div>
                    );
                  }

                  return (
                    <p key={activePost.id + "-paragraph-" + index}>
                      {block.text}
                    </p>
                  );
                })}
              </div>

              {activePost.sourceUrl && (
                <a
                  href={activePost.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="ApplicationButton PostContentOverlaySource"
                >
                  <p>Read Original Article</p>
                  <span className="material-symbols-outlined">
                    arrow_outward
                  </span>
                </a>
              )}
            </article>

            <aside className="PostContentOverlayFlexContentAside PostContentOverlayAside">
              <div className="PostContentOverlayAsideHeader">
                <span>More Posts</span>
                <h2>Continue Reading</h2>
              </div>

              <div className="PostContentOverlayAsideList">
                {relatedPosts.map((post) => (
                  <button
                    type="button"
                    className="PostContentOverlayAsideItem"
                    key={post.id}
                    onClick={() => openRelatedPost(post.id)}
                  >
                    <img src={post.image} alt={post.title} />

                    <div>
                      <span>{post.category}</span>
                      <h3>{post.title}</h3>
                      <p>{post.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            </aside>
          </div>
        </section>
      )}
    </>
  );
}
