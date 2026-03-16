import Hero from '@/components/home/Hero';
import FeaturedMedia from '@/components/home/FeaturedMedia';
import RecentNews from '@/components/home/RecentNews';
import videosData from '@/data/videos.json';
import designsData from '@/data/designs.json';
import newsData from '@/data/news.json';
import { Video, Design, NewsItem } from '@/lib/types';

export default function Home() {
  const videos = videosData as Video[];
  const designs = designsData as Design[];
  const news = newsData as NewsItem[];

  return (
    <>
      <Hero />
      <FeaturedMedia videos={videos} designs={designs} />
      <RecentNews news={news} />
    </>
  );
}
