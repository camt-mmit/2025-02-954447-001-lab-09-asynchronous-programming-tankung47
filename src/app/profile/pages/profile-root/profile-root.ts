import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './profile-root.html',
  styleUrl: './profile-root.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileRoot {}
