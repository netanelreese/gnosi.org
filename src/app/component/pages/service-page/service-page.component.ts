import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.scss']
})
export class ServicesComponent {
  services = [
    { name: 'Gitea', description: 'Self-hosted Git service', link: 'http://gnosi.org:3000' },
    { name: 'Vikunja', description: 'Open-source task management', link: 'http://gnosi.org:3456' },
    { name: 'Nextcloud', description: 'Private cloud storage', link: 'http://gnosi.org:8080' },
    { name: 'FreeIPA', description: 'Identity management system', link: 'http://gnosi.org/ipa/ui' },
    { name: 'HAProxy', description: 'High availability load balancer', link: 'http://gnosi.org:1936' },
    { name: 'pfSense', description: 'Open-source firewall', link: 'http://gnosi.org:443' },
    { name: 'Minecraft', description: 'Minecraft game server', link: 'http://gnosi.org:8123' }
  ];
}
