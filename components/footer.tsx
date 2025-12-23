import { Facebook, Instagram, Twitter, Youtube, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary/50 py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Overcome Jiu Jitsu</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Get the best authentic Brazilian Jiu Jitsu training in Bentonville, Arkansas. World champion instructors teaching Kids BJJ, Adult BJJ, Women-Only BJJ, and Private Training.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/overcomebjj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/overcomebjj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.google.com/maps/place/Overcome+Brazilian+jiu-jitsu+school/@36.3367733,-94.2526732,15z/data=!4m6!3m5!1s0x87c90f9a57d24cdf:0x24cbc936baccb6a7!8m2!3d36.3367733!4d-94.2526732!16s%2Fg%2F11nmrg99k8?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Google Maps"
              >
                <MapPin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">QUICK LINKS</h4>
            <ul className="space-y-2">
              <li>
                <a href="/programs" className="text-muted-foreground hover:text-primary transition-colors">
                  Programs
                </a>
              </li>
              <li>
                <a href="/team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </a>
              </li>
              <li>
                <a href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">CONTACT INFO</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>3600 Southwest Regional Airport Blvd</li>
              <li>Bentonville, AR 72712</li>
              <li>
                <a href="tel:4798002550" className="hover:text-primary transition-colors">
                  (479) 800-2550
                </a>
              </li>
              <li>
                <a href="mailto:overcomebjj@gmail.com" className="hover:text-primary transition-colors">
                  overcomebjj@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-foreground mb-4 tracking-tight">PROGRAMS</h4>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Kids BJJ</li>
              <li>Adult BJJ</li>
              <li>Women-Only BJJ</li>
              <li>Private Training</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground/80">
          <p>&copy; {new Date().getFullYear()} Overcome Jiu Jitsu. All rights reserved.</p>
          <p className="mt-2">
            Powered by{" "}
            <a
              href="https://fitlo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline transition-colors"
            >
              Fitlo
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
