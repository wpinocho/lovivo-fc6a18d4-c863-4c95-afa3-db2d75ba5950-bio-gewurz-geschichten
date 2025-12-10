import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Award, Shield, Heart, Leaf, Users, Star } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { FloatingCart } from '@/components/FloatingCart';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import originStoryImage from '@/assets/origin-story.jpg';

/**
 * EDITABLE UI - IndexUI
 * 
 * Interfaz completamente editable para la página principal.
 * El agente IA puede modificar colores, textos, layout, etc.
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  return (
    <EcommerceTemplate 
      showCart={true}
    >
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://ptgmltivisbtvmoxwnhd.supabase.co/storage/v1/object/public/product-images/fc6a18d4-c863-4c95-afa3-db2d75ba5950/hero-spices.jpg"
            alt="Bio-Gewürze"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Die Reinheit der Natur in jedem Gewürz
            </h1>
            <p className="text-xl md:text-2xl text-white/95 mb-10 leading-relaxed">
              OmVeda verbindet jahrtausendealte ayurvedische Weisheit mit zertifizierter Bio-Qualität. Jedes Gewürz eine Reise zu seinen Wurzeln.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-5 rounded-xl text-lg font-semibold transition-all shadow-2xl hover:shadow-primary/20 hover:scale-105"
              >
                Gewürze entdecken
              </button>
              <button 
                onClick={() => document.getElementById('origin-story')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border-2 border-white/30 px-10 py-5 rounded-xl text-lg font-semibold transition-all"
              >
                Unsere Geschichte
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 mb-4">
                <Shield className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-1">EU Bio-Zertifiziert</h4>
              <p className="text-sm text-muted-foreground">DE-ÖKO-001</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-secondary/15 mb-4">
                <Heart className="w-10 h-10 text-secondary" />
              </div>
              <h4 className="font-bold text-foreground mb-1">Fair Trade</h4>
              <p className="text-sm text-muted-foreground">Direkt von Bauern</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/15 mb-4">
                <Leaf className="w-10 h-10 text-accent" />
              </div>
              <h4 className="font-bold text-foreground mb-1">100% Natürlich</h4>
              <p className="text-sm text-muted-foreground">Keine Zusätze</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/15 mb-4">
                <Award className="w-10 h-10 text-primary" />
              </div>
              <h4 className="font-bold text-foreground mb-1">Premium Qualität</h4>
              <p className="text-sm text-muted-foreground">Seit 2010</p>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section id="origin-story" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                Unsere Geschichte
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Von den Feldern Indiens nach Deutschland
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">OmVeda</strong> wurde 2010 aus einer tiefen Leidenschaft für authentische Gewürze und ayurvedische Tradition geboren. Unsere Gründerin Priya verbrachte Jahre in Indien, lernte von Gewürzhändlern und Bauernfamilien.
                </p>
                <p>
                  Zurück in Deutschland vermisste sie die <strong className="text-foreground">intensive Frische und Reinheit</strong> echter Bio-Gewürze. So entstand die Vision: Kleine Bauernkooperativen in Indien, Sri Lanka und anderen Ursprungsländern direkt mit deutschen Küchen zu verbinden.
                </p>
                <p>
                  Heute arbeiten wir mit <strong className="text-foreground">über 40 Familienbetrieben</strong> zusammen. Jedes Gewürz wird von Hand geerntet, traditionell verarbeitet und frisch nach Deutschland gebracht - ohne Zwischenhändler, ohne Kompromisse.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Jahre Erfahrung</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">40+</div>
                  <div className="text-sm text-muted-foreground">Bauernfamilien</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-1">12K+</div>
                  <div className="text-sm text-muted-foreground">Zufriedene Kunden</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img 
                src={originStoryImage}
                alt="Gewürzfarmen in Indien"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Was uns auszeichnet
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              OmVeda steht für mehr als nur Gewürze - wir stehen für eine Bewegung
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Direkt & Fair</h3>
              <p className="text-muted-foreground leading-relaxed">
                Wir kaufen direkt bei Bauernkooperativen - keine Zwischenhändler. Faire Preise für Erzeuger, beste Qualität für Sie. Jeder Kauf unterstützt nachhaltige Landwirtschaft.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 mb-6">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">100% Bio & Rein</h3>
              <p className="text-muted-foreground leading-relaxed">
                EU-zertifizierte Bio-Qualität ohne Pestizide, Bestrahlung oder Zusätze. Regelmäßige Laborkontrollen garantieren Reinheit. Was Sie kaufen, ist reine Natur.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-border hover:shadow-xl transition-all">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-accent/70 mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Mit Leidenschaft</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jedes Gewürz wird von Hand verlesen und verpackt. Unser Team in Hamburg testet und kostet jede Charge. Qualität, die man schmeckt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Was unsere Kunden sagen
            </h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-lg text-muted-foreground ml-2">4.9 von 5 (1.247 Bewertungen)</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Der Geschmacksunterschied ist unglaublich! Seit ich OmVeda Kurkuma verwende, brauche ich viel weniger davon. Die Qualität ist einfach herausragend."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
                  SM
                </div>
                <div>
                  <div className="font-semibold text-foreground">Sarah M.</div>
                  <div className="text-sm text-muted-foreground">München</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Als Koch war ich auf der Suche nach authentischen Gewürzen. OmVeda übertrifft alle Erwartungen - Frische und Aroma sind konkurrenzlos!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary font-bold mr-3">
                  TK
                </div>
                <div>
                  <div className="font-semibold text-foreground">Thomas K.</div>
                  <div className="text-sm text-muted-foreground">Berlin</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "Endlich Gewürze, bei denen ich weiß woher sie kommen! Die Geschichte hinter jedem Produkt macht das Kochen zu einem besonderen Erlebnis."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent font-bold mr-3">
                  LP
                </div>
                <div>
                  <div className="font-semibold text-foreground">Lisa P.</div>
                  <div className="text-sm text-muted-foreground">Hamburg</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Unsere Kollektionen
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Jede Kollektion ist eine Reise durch die Aromen der Welt
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Kollektion'
                  : 'Unsere Bio-Gewürze'
                }
              </h2>
              <p className="text-muted-foreground">
                {selectedCollectionId 
                  ? 'Handverlesene Gewürze aus dieser Kollektion'
                  : 'Von Kleinbauern mit Liebe angebaut und fair gehandelt'
                }
              </p>
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                Alle Gewürze anzeigen
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted rounded-lg h-80 animate-pulse"></div>
              ))}
            </div>
          ) : filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Keine Produkte verfügbar.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />

      <FloatingCart />
    </EcommerceTemplate>
  );
};