const DEFAULT_SIZE = 'm'
const AVATAR_SIZES = {
  s: '16px',
  m: '64px',
  l: '80px',
  xl: '128px'
}

const getAvatarSize = size => AVATAR_SIZES[size] || AVATAR_SIZES[DEFAULT_SIZE]

export default function Avatar ({alt, src, size = DEFAULT_SIZE}) {
  return (
    <>
    <img
      async=""
      decoding="async"
      loading="lazy"
      importance="low"
      alt={alt}
      title={alt}
      src={src} />
    
    <style jsx>{`
      img {
        border-radius: 9999px;
        overflow: hidden;
      }  
    `}</style>
    <style jsx>{`
      img {
        height: ${getAvatarSize(size)};
        width: ${getAvatarSize(size)};
      }
      `}</style>
    </>
  )
}