import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SpotifyAudioService {

  /**
   * Audio Object
   */
  private audio: HTMLAudioElement;

  /**
   * Player status (true if playing, false if not)
   * @type {boolean}
   */
  ended$: Subject<boolean> = new BehaviorSubject<boolean>(null);

  /**
   * Current track Url
   */
  private trackUrl: string ;

  /**
   * Play Spotify Track
   * @param trackUrl
   */
  playAudioTrack(nextTrackUrl) {

    // Stop current track
    this.pauseTrack();

    // Do nothing, if next and current track are the same
    if (nextTrackUrl === this.trackUrl) {
      //this.trackUrl = null;
      return;
    }

    // Play track
    this.trackUrl = nextTrackUrl;
    this.audio = new Audio(nextTrackUrl);
    this.audio.play();
    
  }

  /**
   * Pause Spotify Track
   */
  pauseTrack() {
    if (this.audio) {
      this.audio.pause();
    }
  }
}