import { Component, ElementRef, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CompanyDataService } from '../../services/company-data.service';
import { CompanyData } from '../../models/company-data.model';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

@Component({
  selector: 'app-ai-chat',
  imports: [FormsModule],
  templateUrl: './ai-chat.html',
  styleUrl: './ai-chat.css'
})
export class AiChatComponent {
  @ViewChild('messagesEl') messagesEl!: ElementRef<HTMLDivElement>;

  private data: CompanyData;

  isOpen = signal(false);
  isTyping = signal(false);
  messages = signal<Message[]>([
    { role: 'bot', text: "Hi! I'm M/S Sarker's assistant.\nAsk me anything about our products, services, or how to reach us." }
  ]);
  userInput = '';

  readonly suggestions = [
    'What products do you sell?',
    'How to contact you?',
    'Solar system info',
    'Lightning protection',
  ];

  constructor(companyDataService: CompanyDataService) {
    this.data = companyDataService.getData();
  }

  toggle() {
    this.isOpen.update(v => !v);
  }

  send(text?: string) {
    const input = (text ?? this.userInput).trim();
    if (!input || this.isTyping()) return;

    this.messages.update(msgs => [...msgs, { role: 'user', text: input }]);
    this.userInput = '';
    this.isTyping.set(true);
    this.scrollToBottom();

    setTimeout(() => {
      const response = this.getResponse(input);
      this.isTyping.set(false);
      this.messages.update(msgs => [...msgs, { role: 'bot', text: response }]);
      setTimeout(() => this.scrollToBottom(), 50);
    }, 700);
  }

  private scrollToBottom() {
    setTimeout(() => {
      try {
        if (this.messagesEl) {
          this.messagesEl.nativeElement.scrollTop = this.messagesEl.nativeElement.scrollHeight;
        }
      } catch {}
    }, 30);
  }

  private getResponse(input: string): string {
    const q = input.toLowerCase();
    const c = this.data.company;

    if (/phone|call|number|contact|reach/.test(q)) {
      return `You can reach us at:\n📞 ${c.phone1}\n📞 ${c.phone2}\n📧 ${c.email}`;
    }
    if (/address|location|where|office/.test(q)) {
      return `Our office is at:\n📍 ${c.address}`;
    }
    if (/product|sell|offer|supply|what do you/.test(q)) {
      const cats = [...new Set(this.data.products.map(p => p.category))];
      return `We supply:\n${cats.map(cat => `• ${cat}`).join('\n')}`;
    }
    if (/solar|panel|pv|inverter|hybrid/.test(q)) {
      const items = this.data.products.filter(p => /Solar|Renewable/i.test(p.category));
      return items.map(p => `☀️ ${p.name}\n${p.description}`).join('\n\n');
    }
    if (/lightning|ese|earthing|earth|surge|spd|lps/.test(q)) {
      const items = this.data.products.filter(p => /Lightning|Circuit/i.test(p.category));
      return items.map(p => `🌩️ ${p.name}\n${p.description.slice(0, 100)}...`).join('\n\n');
    }
    if (/ips|power backup|ups|battery|portable/.test(q)) {
      const items = this.data.products.filter(p => /Power/i.test(p.category));
      return items.map(p => `🔋 ${p.name}\n${p.description}`).join('\n\n');
    }
    if (/street light|street|light/.test(q)) {
      const items = this.data.products.filter(p => /Street|Light/i.test(p.category));
      return items.map(p => `💡 ${p.name}\n${p.description}`).join('\n\n');
    }
    if (/warranty|guarantee/.test(q)) {
      return 'Our products carry up to 15 years warranty.\nESE lightning protection systems have a 2-year warranty with a 25-year product lifetime.';
    }
    if (/founded|since|when|established|about/.test(q)) {
      return `${c.name} was founded in ${c.founded}.\n\n${c.mission}`;
    }
    if (/ceo|owner|founder|who/.test(q)) {
      return `The CEO of ${c.name} is:\n👤 ${c.ceo}`;
    }
    if (/facebook|social|media/.test(q)) {
      return `Find us on Facebook:\n🔵 ${c.facebook}`;
    }
    if (/whatsapp|chat|message/.test(q)) {
      return `Chat with us on WhatsApp:\n📱 ${c.phone1}`;
    }
    if (/project|client|completed/.test(q)) {
      const count = this.data.stats.find(s => s.label === 'Projects Completed')?.value ?? '50+';
      return `We've completed ${count} projects.\nMajor clients:\n${this.data.clients.slice(0, 4).map(cl => `• ${cl}`).join('\n')}`;
    }
    if (/price|cost|rate|quote|quotation/.test(q)) {
      return `For pricing, contact us directly:\n📞 ${c.phone1}\n📧 ${c.email}\n\nWe provide custom quotes based on your requirements.`;
    }
    if (/certification|certified|authorized/.test(q)) {
      return `Our certifications:\n${this.data.certifications.map(cert => `• ${cert}`).join('\n')}`;
    }
    if (/hello|hi|hey|good/.test(q)) {
      return `Hello! 👋 How can I help you today?\nYou can ask me about our products, pricing, contact details, or projects.`;
    }

    return `I'm not sure about that. For detailed help, please contact us:\n📞 ${c.phone1}\n📧 ${c.email}`;
  }
}
