import omVedaLogo from '@/assets/omveda-logo.jpg';

export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Startseite" className="ml-2 flex items-center">
      <img 
        src={omVedaLogo} 
        alt="OmVeda Organic Products Logo"
        className="h-14 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold" style="color: hsl(145, 45%, 42%);">Om<span style="color: hsl(75, 35%, 55%);">Veda</span></span>';
        }}
      />
    </a>
  )
}