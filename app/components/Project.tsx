import { useState, useRef, useEffect, type FC } from "react";
import Tag from "./Tag";

const Project: FC<{
  title: string;
  projectUrl: string;
  description: string;
  isIFrame: boolean;
  imgUrl: string;
  imgAlt: string;
  tags: Array<string>;
  previewImgUrl?: string;
}> = ({ title, projectUrl, description, isIFrame, imgUrl, imgAlt, tags, previewImgUrl }) => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const focusGame = () => {
    setTimeout(() => {
      try {
        const iframe = iframeRef.current;
        if (iframe?.contentWindow) {
          iframe.contentWindow.focus();
          const canvas = iframe.contentDocument?.getElementById('canvas') as HTMLCanvasElement;
          if (canvas) {
            canvas.focus();
          }
        }
      } catch (e) {
        // If we can't access iframe content due to CORS, just focus the iframe itself
        iframeRef.current?.focus();
      }
    }, 100);
  };

  const handleFullscreen = async () => {
    if (!document.fullscreenElement) {
      if (iframeContainerRef.current?.requestFullscreen) {
        await iframeContainerRef.current.requestFullscreen();
        focusGame();
      }
    } else {
      if (document.exitFullscreen) {
        await document.exitFullscreen();
        focusGame();
      }
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <a
          href={projectUrl}
          rel="noreferrer"
          target="_blank"
          className="font-semibold text-lg text-indigo-700 underline"
        >
          {title}
        </a>
        <p className="text-neutral-600">{description}</p>
      </div>
      {isIFrame ? (
        isGameStarted ? (
          <div ref={iframeContainerRef} className="relative rounded-md overflow-hidden aspect-video bg-black">
            <iframe ref={iframeRef} className="w-full h-full" src={imgUrl} title={imgAlt} />
            <button
              onClick={handleFullscreen}
              className="absolute top-2 right-2 bg-black bg-opacity-70 hover:bg-opacity-90 text-white p-2 rounded-md transition-all z-10"
              title={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              )}
            </button>
          </div>
        ) : (
          <div 
            className="relative rounded-md overflow-hidden cursor-pointer group aspect-video"
            onClick={() => setIsGameStarted(true)}
          >
            <img 
              className="rounded-md w-full h-full object-cover" 
              src={previewImgUrl || imgUrl} 
              alt={imgAlt} 
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-60 transition-all">
              <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-full transition-colors">
                Click to Play
              </button>
            </div>
          </div>
        )
      ) : (
        <img className="rounded-md" src={imgUrl} alt={imgAlt} />
      )}

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, _) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: no need for a key prop here...
          <Tag text={tag} key={_} />
        ))}
      </div>
    </div>
  );
};

export default Project;
