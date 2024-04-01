import React from 'react';

type VideoGridItemProps = {
  id: string;
  title: string;
  channelName: string;
  views: number;
  uploadedDateTime: string;
  duration: string;
  thumbnail: string;
  channelPicture: string;
  category: string; // Include category in props
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined);

export function VideoGridItem({
  id,
  title,
  channelName,
  views,
  uploadedDateTime,
  duration,
  thumbnail,
  channelPicture,
  category, // Include category in props
}: VideoGridItemProps) {
  const uploadedDate = new Date(uploadedDateTime);
  const formattedUploadedDateTime = uploadedDate.toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
  });

  return (
    <div className="flex flex-col gap-2" data-category={category}> {/* Include category as data attribute */}
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <img src={thumbnail} className="block w-full h-full object-cover rounded-xl" alt="Thumbnail" />
        <div className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {duration} {/* Display provided duration */}
        </div>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channelName}`} className="flex-shrink-0">
          <img className="w-12 h-12 rounded-full" src={channelPicture} alt="Channel" />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channelName}`} className="text-secondary-text text-sm">
            {channelName}
          </a>
          <div className="text-secondary-text text-sm">
            {VIEW_FORMATTER.format(views)} Views • {formattedUploadedDateTime} {/* Display formatted uploaded date and time */}
          </div>
          {/* Category is not displayed */}
        </div>
      </div>
    </div>
  );
}
