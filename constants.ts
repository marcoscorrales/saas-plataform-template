import { Code, ImageIcon, MessageSquare, Music, VideoIcon, LayoutDashboard, Settings } from "lucide-react";


export const MAX_FREE_COUNTS = 5;

export const tools = [
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
    },
    {
      label: 'Music Generation',
      icon: Music,
      href: '/music',
      color: "text-emerald-500",
      bgColor: "bg-emerald-500/10",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      bgColor: "bg-pink-700/10",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      bgColor: "bg-orange-700/10",
      href: '/video',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      bgColor: "bg-green-700/10",
      href: '/code',
    },
  ];

  export const testimonials = [
    {
      name: "Joel",
      avatar: "J",
      title: "Software Engineer",
      description: "This is the best application I've ever used!",
    },
    {
      name: "Antonio",
      avatar: "A",
      title: "Designer",
      description: "I use this daily for generating new photos!",
    },
    {
      name: "Mark",
      avatar: "M",
      title: "CEO",
      description: "This app has changed my life, cannot imagine working without it!",
    },
    {
      name: "Mary",
      avatar: "M",
      title: "CFO",
      description: "The best in class, definitely worth the premium subscription!",
    },
  ];

  export const TypewriterStrings = [
    "Chatbot.",
    "Photo Generation.",
    "Blog Writing.",
    "Mail Writing.",
  ];

  export const routes = [
    {
      label: 'Dashboard',
      icon: LayoutDashboard,
      href: '/dashboard',
      color: "text-sky-500"
    },
    {
      label: 'Conversation',
      icon: MessageSquare,
      href: '/conversation',
      color: "text-violet-500",
    },
    {
      label: 'Image Generation',
      icon: ImageIcon,
      color: "text-pink-700",
      href: '/image',
    },
    {
      label: 'Video Generation',
      icon: VideoIcon,
      color: "text-orange-700",
      href: '/video',
    },
    {
      label: 'Music Generation',
      icon: Music,
      color: "text-emerald-500",
      href: '/music',
    },
    {
      label: 'Code Generation',
      icon: Code,
      color: "text-green-700",
      href: '/code',
    },
    {
      label: 'Settings',
      icon: Settings,
      href: '/settings',
    },
  ];