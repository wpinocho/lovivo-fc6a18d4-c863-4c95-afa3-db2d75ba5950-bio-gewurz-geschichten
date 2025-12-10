export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Startseite" className="ml-2 flex items-center">
      <img 
        src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/fc6a18d4-c863-4c95-afa3-db2d75ba5950/logo.jpg" 
        alt="GewürzLiebe Logo"
        className="h-12 w-auto object-contain" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-2xl font-bold" style="color: hsl(14, 78%, 58%);">Gewürz<span style="color: hsl(142, 40%, 35%);">Liebe</span></span>';
        }}
      />
    </a>
  )
}