import { ChangeDetectionStrategy, Component, inject, resource } from '@angular/core';
import { DynamicSectionDataStorage } from '../../services/dynamic-section-data.storage';
import { DynamicSectionView } from '../../components/dynamic-section-view/dynamic-section-view';

@Component({
  selector: 'app-dynamic-section-view-page',
  imports: [DynamicSectionView],
  templateUrl: './dynamic-section-view-page.html',
  styleUrl: './dynamic-section-view-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicSectionViewPage {
  private readonly dataStorage = inject(DynamicSectionDataStorage);
  protected readonly dataResource = resource({
    loader: async () => await this.dataStorage.get(),
  });
}
